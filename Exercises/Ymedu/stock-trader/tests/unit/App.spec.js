import { localVue, setRouter, stringSearcher } from '../Factory';
import App from '@/App';
import { mount } from '@vue/test-utils';
import stock from '@/components/stocks/Stock';
import store from '@/store/index';
import TopNavigation from '@/components/TopNavigation.vue';

describe('MainApp.vue', () => {
  let wrapper, router;
  beforeEach(() => {
    router = setRouter();
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
    router.push('/portfolio');
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('Please buy some stocks') || []).length).toBe(1);
    router.push('/analysis');
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('End the current day. Please select a stock from the stock tab') || []).length).toBe(1);
    router.push('/stocks');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('should buy a new stock and the sell it', async () => {
    // Important lesson learned here as you see from the test above we are already
    // on the stocks route and then the promise returns an error
    // router.push('/stocks');
    // await wrapper.vm.$nextTick();

    await wrapper.vm.$nextTick();
    const firstStock = wrapper.find(stock);
    firstStock.find('.form-control').setValue(1000);

    // when you want to buy but you don't have the cash
    expect((firstStock.text().match('No funds') || []).length).toBe(1);

    firstStock.find('.form-control').setValue(1);
    expect((firstStock.text().match('No funds') || []).length).toBe(0);

    firstStock.find('.btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(firstStock.find('.form-control').text()).toBe('');

    router.push('/portfolio');
    await wrapper.vm.$nextTick();

    expect(stringSearcher(wrapper,
      ['FUNDS: 9,890 HRK', 'BMW', 'Quantity: 1'])).toBe(true);

    const firstPortfolioStock = wrapper.find('.form-control');

    firstPortfolioStock.setValue('12');
    expect((wrapper.text().match('Not enough') || []).length).toBe(1);
    await wrapper.vm.$nextTick();

    firstPortfolioStock.setValue('1');

    wrapper.find('.btn').trigger('click');

    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('Please buy some stocks') || []).length).toBe(1);
  });
});
