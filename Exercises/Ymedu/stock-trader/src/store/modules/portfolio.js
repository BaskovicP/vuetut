import * as cons from '../../constants';

const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  [cons.BUY_STOCK](state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    // for those nasty cheaters who add - in the quantity ;
    quantity = quantity > 0 ? quantity : (-1 * quantity);
    state.funds -= stockPrice * quantity;
  },
  [cons.SELL_STOCK](state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  [cons.SET_PORTFOLIO](state, portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit(cons.SELL_STOCK, order);
  }

};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  },
  getNameStock: state => id => {
    return state.stocks.filter(item => item.id === id).name;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
;
