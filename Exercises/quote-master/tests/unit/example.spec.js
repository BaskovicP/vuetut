import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar';

describe('HelloWorld.vue', () => {
  const prepareWrapper = props => {
    return mount(ProgressBar, {
      propsData: props
    });
  };
  it('exists', () => {
    const wrapper = prepareWrapper();
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
