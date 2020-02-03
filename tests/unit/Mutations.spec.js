import cons from '@/constants';
import portfolio from '@/store/modules/portfolio.js';

describe('Portfolio mutations', () => {
  const getSetupVariables = (funds = 10000, stocks = [], stockId, quantity, stockPrice) => {
    return ({
      state: {
        funds: 10000,
        stocks: []
      },
      stock: {
        stockId: 1,
        quantity: 1,
        stockPrice: 100
      }
    });
  };
  it('add a stock to the portfolio', () => {
    const { state, stock } = getSetupVariables(1, 1, 100);

    portfolio.mutations[cons.BUY_STOCK](state, stock);

    expect(state).toEqual({
      funds: 9900,
      stocks: [{ id: 1, quantity: 1 }]
    });
    portfolio.mutations[cons.BUY_STOCK](state, stock);
    expect(state).toEqual({
      funds: 9800,
      stocks: [{ id: 1, quantity: 2 }]
    });
  });

  it('should sell the stock', () => {
    const { state, stock } = getSetupVariables(1, 1, 100);
    portfolio.mutations[cons.BUY_STOCK](state, stock);
    portfolio.mutations[cons.SELL_STOCK](state, stock);
    portfolio.mutations[cons.SELL_STOCK](state, stock);
    expect(state).toEqual({
      funds: 10000,
      stocks: []
    });
  });
});
