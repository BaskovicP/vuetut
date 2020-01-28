import { localVue, router } from '../Factory';
import App from '@/App';
import { mount } from '@vue/test-utils';
import store from '@/store/index';
import TopNavigation from '@/components/TopNavigation.vue';

describe('MainApp.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App, {
      store,
      router,
      localVue: localVue()
    });
  });

  it('contains the navigation bar component', () => {
    expect(wrapper.contains(TopNavigation)).toBe(true);
  });
  it('should render the component with a starting page', () => {
    expect(wrapper.text().match('Trade or View your Portfolio').length).toBe(1);
  });
  it('should change the pages with router', async () => {
    router.push('/portfolio');
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('Please buy some stocks') || []).length).toBe(1);
    router.push('/analysis');
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('End the current day. Please select a stock from the stock tab') || []).length).toBe(1);
    router.push('/stocks');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatchSnapshot();
  });
});
