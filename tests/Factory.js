import { createLocalVue, mount } from '@vue/test-utils';
import { routes } from '@/router/routes';
import store from '@/store/index';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

export const createLocVue = () => {
  const tempLocalVue = createLocalVue();
  tempLocalVue.filter('currency', value => {
    return value.toLocaleString() + ' HRK';
  });
  tempLocalVue.use(VueRouter);
  tempLocalVue.use(Vuex);
  return tempLocalVue;
};

export const createRouter = () => new VueRouter({ routes, mode: 'abstract' });

export const stringSearcher = (wrapper, arrayStrings) => {
  let allMatched = true;
  arrayStrings.forEach(str => {
    if (!wrapper.text().match(str)) allMatched = false;
  });
  return allMatched;
};

export const getTestSetup = component => {
  const router = createRouter();
  const wrapper = mount(component, {
    store,
    router,
    localVue: createLocVue()
  });
  return { router, wrapper };
}
;
