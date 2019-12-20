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
    expect(wrapper.find('#text-box-heading').text()).toBe('Quote');
    expect(wrapper.findAll('textarea').length).toBe(1);
    expect(wrapper.contains('button')).toBe(true);
  });
  it('should have Add Quote in the button', () => {
    expect(wrapper.find('button').text()).toBe('Add Quote');
  });
});
