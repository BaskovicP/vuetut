import * as cons from '../../constants';
import stocks from '../../data/stocks';

const state = {
  stocks: [],
  stockHistory: [],
  day: 1,
  stockToAnalyse: []
};

const mutations = {
  [cons.SET_STOCKS](state, stocks) {
    state.stocks = stocks;
    stocks.forEach(stock => state.stockHistory.push([['day', 'price']]));
  },
  [cons.RND_STOCKS](state) {
    state.stocks.forEach((stock, index) => {
      state.stockHistory[index].push([state.day, stock.price]);
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
    state.day++;
  },
  [cons.SET_STOCKS_TO_ANALYZE](state, value) {
    if (!state.stockToAnalyse.includes(value)) state.stockToAnalyse.push(value);
    else state.stockToAnalyse = state.stockToAnalyse.filter(item => item !== value);
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit(cons.BUY_STOCK, order);
  },
  initStocks: ({ commit }) => {
    commit(cons.SET_STOCKS, stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit(cons.RND_STOCKS);
  },
  analyzeThis: ({ commit }, value) => {
    commit(cons.SET_STOCKS_TO_ANALYZE, value);
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  },
  day: state => {
    return state.day;
  },
  stockHistory: state => {
    return state.stockHistory;
  },
  stocksToAnalyze: state => {
    return state.stockToAnalyse;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
