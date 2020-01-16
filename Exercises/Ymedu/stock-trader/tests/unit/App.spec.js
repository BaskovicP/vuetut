import App from '@/App';
import { mount } from '@vue/test-utils';
import TopNavigation from '@/components/TopNavigation.vue';
describe('HelloWorld.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
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
    const searchingFor = ['Portfolio (current)', 'Stocks', 'End Day'];
    expect(wrapper
      .findAll('.nav-link')
      .filter(item => searchingFor.includes(item.text())).length)
      .toBe(searchingFor.length);
  });
});
