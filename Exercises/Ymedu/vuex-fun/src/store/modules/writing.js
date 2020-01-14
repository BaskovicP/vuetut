const state = { text: "" };
const getters = { getText: state => state.text };
const mutations = { setText: (state, payload) => (state.text = payload) };
const actions = {
  setText: ({ commit }, payload) => commit("setText", payload)
};

export default {
  state,
  getters,
  mutations,
  actions
};
