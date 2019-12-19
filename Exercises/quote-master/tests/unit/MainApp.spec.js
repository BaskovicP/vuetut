import MainApp from '@/App';
import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar';
import QuoteText from '@/components/QuoteText';

describe('MainApp', () => {
  const prepareWrapper = props => {
    return mount(MainApp, {
      propsData: props
    });
  };
  let wrapper;
  beforeEach(() => {
    wrapper = prepareWrapper();
  });
  it('will compile', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it('should contain all elements', () => {
    expect(wrapper.contains(ProgressBar)).toBe(true);
    expect(wrapper.contains(QuoteText)).toBe(true);
  });
});
