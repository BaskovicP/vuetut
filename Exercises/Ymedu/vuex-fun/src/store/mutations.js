export const mutations = {
  increment: state => {
    state.counter++;
  },
  decrement: state => {
    state.counter--;
  },
  updateValue: (state, value) => {
    state.counter = value;
  }
};
