<template>
  <div>
    Hello dear world <br />
    The counter is {{ counter }} <br />
    <button @click="increase">Increase</button> <br />
    <button @click="decrease">Decreaes</button>
  </div></template
>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    increase() {
      this.$store.state.counter++;
    },
    decrease() {
      this.$store.state.counter--;
    }
  }
};
</script>
<style scoped></style>
