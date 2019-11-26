// counter.js

export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
      <button id="decrement-button" @click="decrement">Decrement</button>
    </div>
  `,

  data() {
    return {
      count: 0
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
