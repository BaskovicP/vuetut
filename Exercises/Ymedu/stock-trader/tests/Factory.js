import { createLocalVue } from '@vue/test-utils';
import { routes } from '@/router/routes';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

export const localVue = () => {
  const tempLocalVue = createLocalVue();
  tempLocalVue.filter('currency', value => {
    return value.toLocaleString() + ' HRK';
  });
  tempLocalVue.use(VueRouter);
  tempLocalVue.use(Vuex);
  return tempLocalVue;
};

export const router = new VueRouter({ routes });
