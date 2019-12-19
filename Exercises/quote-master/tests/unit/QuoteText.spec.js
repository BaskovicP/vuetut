import { mount } from '@vue/test-utils';
import QuoteText from '@/components/QuoteText';

describe('HelloWorld.vue', () => {
  const prepareWrapper = props => {
    return mount(QuoteText, {
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
  it('should have all the necessary elements', () => {
    expect(wrapper.find('#textBoxHeading').text()).toBe('Quote');
    expect(wrapper.findAll('textarea').length).toBe(1);
  });
});
