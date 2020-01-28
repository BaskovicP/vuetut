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
    // console.log(wrapper.html());
    wrapper.find('.nav-item').trigger('click');
    await wrapper.vm.$nextTick();
    // console.log(wrapper.html());
  });
});
