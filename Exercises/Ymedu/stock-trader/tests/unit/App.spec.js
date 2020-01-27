import { createLocalVue, mount } from '@vue/test-utils';
import App from '@/App';
import TopNavigation from '@/components/TopNavigation.vue';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stocks: [],
    stockHistory: [],
    day: 1,
    stockToAnalyse: []
  }
});

describe('TopNavigation.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App, {
      store,
      localVue
    });
  });
  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });
  it('contains the navigation bar component', () => {
    expect(wrapper.contains(TopNavigation)).toBe(true);
  });
  it('should contain the name StockTrader', () => {
    expect(wrapper.find('.navbar-brand').text()).toBe('StockTrader');
  });
  it('should contain navlinks Portfolio,Stocks,End Day', () => {
    const searchingFor = ['Portfolio', 'Stocks', 'End Day'];
    expect(wrapper
      .findAll('.nav-link')
      .filter(item => searchingFor.includes(item.text())).length)
      .toBe(searchingFor.length);
  });
});
