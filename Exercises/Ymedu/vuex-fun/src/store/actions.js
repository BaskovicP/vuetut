export const actions = {
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
};
