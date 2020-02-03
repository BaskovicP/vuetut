import { createLocVue, createRouter } from '../Factory';
import { shallowMount } from '@vue/test-utils';
import store from '@/store/index';
import TopNavigation from '@/components/TopNavigation.vue';

describe('MainApp.vue', () => {
  let wrapper;
  const router = createRouter();
  beforeEach(() => {
    wrapper = shallowMount(TopNavigation, {
      store,
      localVue: createLocVue(),
      router
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
    const searchingFor = ['Portfolio', 'Analysis', 'Stocks', 'End Day'];
    expect(wrapper
      .findAll('.nav-link')
      .filter(item => searchingFor.includes(item.text())).length)
      .toBe(searchingFor.length);
  });
  it('should have 10,000 founds as a starting point', () => {
    expect(wrapper.find('.navbar-text').text()).toBe('FUNDS: 10,000 HRK');
  });
  it('should increase the number of days when we click on the end day', async () => {
    wrapper.find('#end-day-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('#day-number').text()).toBe('2');
    wrapper.find('#end-day-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('#day-number').text()).toBe('3');
  });
});
