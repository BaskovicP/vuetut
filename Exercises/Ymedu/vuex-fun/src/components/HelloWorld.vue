<template>
  <div>
    Hello dear world <br />
    The counter is {{ counter }} <br />
    <button @click="increment">Increase</button> <br />
    <button @click="decrement">Decreaes</button>
    <button @click="asyncIncrement({ by: 10, time: 2000 })">
      Async increase
    </button>
  </div></template
>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      counter: "doubleCounter"
    })
  },
  methods: {
    ...mapActions(["increment", "decrement", "asyncIncrement"])
  }
};
</script>
<style scoped></style>
