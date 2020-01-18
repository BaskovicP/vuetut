import App from './App.vue';
import router from './router';
import store from './store';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.filter('currency', value => {
  return value.toLocaleString() + ' HRK';
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
