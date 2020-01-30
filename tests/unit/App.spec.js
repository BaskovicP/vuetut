import * as cons from '../../src/constants';
import { getTestSetup, stringSearcher } from '../Factory';
import App from '@/App';
import stock from '@/components/stocks/Stock';
import TopNavigation from '@/components/TopNavigation.vue';

describe('MainApp.vue', () => {
  let wrapper, router;
  beforeEach(() => {
    ({ wrapper, router } = getTestSetup(App));
  });

  it('contains the navigation bar component', () => {
    expect(wrapper.contains(TopNavigation)).toBe(true);
  });
  it('should render the component with a starting page', () => {
    router.push(cons.HOME_ROUTE);
    expect((wrapper.text().match('Trade or View your Portfolio') || []).length).toBe(1);
  });
  it('should change the pages with router', async () => {
    router.push(cons.PORTFOLIO_ROUTE);
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('Please buy some stocks') || []).length).toBe(1);
    router.push(cons.ANALYSIS_ROUTE);
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('End the current day. Please select a stock from the stock tab') || []).length).toBe(1);
    router.push(cons.STOCKS_ROUTE);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toMatchSnapshot();
  });

  it('should buy a new stock and the sell it', async () => {
    router.push(cons.STOCKS_ROUTE);
    await wrapper.vm.$nextTick();
    const firstStock = wrapper.find(stock);
    firstStock.find('.form-control').setValue(1000);

    // when you want to buy but you don't have the cash
    expect((firstStock.text().match('No funds') || []).length).toBe(1);

    firstStock.find('.form-control').setValue(1);
    expect((firstStock.text().match('No funds') || []).length).toBe(0);

    firstStock.find('.btn').trigger('click');
    firstStock.findAll('.btn').at(1).trigger('click'); // click the analyze also

    await wrapper.vm.$nextTick();
    expect(firstStock.find('.form-control').text()).toBe('');

    router.push(cons.PORTFOLIO_ROUTE);
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
  it('should not ask the user to select a stock', async () => {
    router.push(cons.ANALYSIS_ROUTE);
    await wrapper.vm.$nextTick();
    expect((wrapper.text().match('Please select a stock fr') || []).length).toBe(0);
  });
});
