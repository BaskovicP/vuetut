import App from '@/App';
import { localVue } from '../FakeStore';
import { shallowMount } from '@vue/test-utils';
import store from '@/store/index';
import TopNavigation from '@/components/TopNavigation.vue';

describe('MainApp.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App, {
      store,
      localVue
    });
  });

  it('contains the navigation bar component', () => {
    expect(wrapper.contains(TopNavigation)).toBe(true);
  });
  it('should render the component', () => {
    console.log(wrapper.html());
  });
});
