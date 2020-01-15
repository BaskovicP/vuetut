import { shallowMount } from '@vue/test-utils';
import TopNavigation from '@/components/TopNavigation.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(TopNavigation, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
