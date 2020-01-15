const state = { counter: "" };
const getters = { getText: state => state.counter };
const mutations = { setText: (state, payload) => (state.counter = payload) };
const actions = {
  setText: ({ commit }, payload) => commit("setText", payload)
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
