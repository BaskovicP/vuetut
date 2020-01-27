import stocks from '../../data/stocks';

const state = {
  stocks: [],
  stockHistory: [],
  day: 1,
  stockToAnalyse: []
};

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks;
    stocks.forEach(stock => state.stockHistory.push([['day', 'price']]));
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach((stock, index) => {
      state.stockHistory[index].push([state.day, stock.price]);
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
    state.day++;
  },
  'SET_STOCKS_TO_ANALYZE'(state, value) {
    if (!state.stockToAnalyse.includes(value)) state.stockToAnalyse.push(value);
    else state.stockToAnalyse = state.stockToAnalyse.filter(item => item !== value);
    console.log(value);
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  },
  analyzeThis: ({ commit }, value) => {
    commit('SET_STOCKS_TO_ANALYZE', value);
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
  stockstToAnalyze: state => {
    return state.stockToAnalyse;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
