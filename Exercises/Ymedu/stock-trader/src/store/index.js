import * as actions from './actions';
import portfolio from './modules/portfolio';
import stocks from './modules/stocks';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portfolio
  }
});
