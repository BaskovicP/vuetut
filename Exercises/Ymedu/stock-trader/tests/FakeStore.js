import { createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

export const localVue = createLocalVue();
localVue.filter('currency', value => {
  return value.toLocaleString() + ' HRK';
});
localVue.use(VueRouter);
localVue.use(Vuex);
