import MainApp from '@/App';
import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar';
import QuoteText from '@/components/QuoteText';
import SingleQuote from '@/components/SingleQuote';

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
    expect(wrapper.findAll(QuoteText).length).toBe(1);
  });
  it('should add a new quote after clicking on the button', () => {
    wrapper = mount(MainApp);
    wrapper.find('#insertQuote').setValue('heheh');
    console.log(wrapper.html());
    wrapper.find('#add-quote-button').trigger('click');

    expect(wrapper.contains(SingleQuote)).toBe(true);
  });
  it('should have no quotes when quotes data is empty', () => {
    expect(wrapper.contains(SingleQuote)).toBe(false);
  });
  it('should not add a new quote if there is nothing in the text area', () => {
    wrapper.find('#add-quote-button').trigger('click');
    expect(wrapper.contains(SingleQuote)).toBe(false);
  });
});
