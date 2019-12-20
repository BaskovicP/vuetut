import { mount } from '@vue/test-utils';
import SingleQuote from '@/components/SingleQuote';

describe('SingleQuote.vue', () => {
  const prepareWrapper = props => {
    return mount(SingleQuote, {
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
  it('should change text by prop', () => {
    expect(prepareWrapper({ quoteText: 'Hello' }).find('#main-text').text()).toBe('Hello');
  });
});
