import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    // name : state => function
    doubleCounter: state => state.counter * 2,
    normalCounter: state => state.counter
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload.by;
    },
    decrement: state => {
      state.counter--;
    },
    updateValue: (state, value) => {
      state.counter = value;
    }
  },
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    },
    decrement: ({ commit }) => {
      commit("decrement");
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => commit("increment", payload), payload.time);
    },
    updateValue: ({ commit }, value) => commit("updateValue", value)
  }
});
