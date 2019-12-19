import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar';

describe('HelloWorld.vue', () => {
  const idProgress = '#progressBar';
  const prepareWrapper = props => {
    return mount(ProgressBar, {
      propsData: props
    });
  };
  let wrapper;
  beforeEach(() => {
    wrapper = prepareWrapper();
  });
  it('will compile', () => {
    const wrapper = prepareWrapper();
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it('should contain a heading with text Quotes Added', () => {
    expect(wrapper.find('#progressHeading').text()).toBe('Quotes Added');
  });
  it('should contain a progressbar with 0/10 and 4/10 text', () => {
    wrapper = prepareWrapper({ numQuotes: 0 });
    expect(wrapper.find(idProgress).text()).toBe('0/10');
    wrapper = prepareWrapper({ numQuotes: 4 });
    expect(wrapper.find(idProgress).text()).toBe('4/10');
    expect(wrapper.find(idProgress).attributes()).toEqual(
      {
        'aria-valuemax': '10',
        'aria-valuemin': '0',
        'aria-valuenow': '4',
        class: 'progress-bar',
        id: 'progressBar',
        role: 'progressbar',
        style: 'width: 25%;'
      });
  });
});
