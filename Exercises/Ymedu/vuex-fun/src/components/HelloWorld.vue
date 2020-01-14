<template>
  <div>
    Hello dear world <br />
    The counter is {{ counter }} <br />
    <button @click="increase">Increase</button> <br />
    <button @click="decrease">Decreaes</button>
  </div></template
>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      counter: "doubleCounter"
    })
  },
  methods: {
    increase() {
      this.$store.commit("increment");
    },
    decrease() {
      this.$store.commit("decrement");
    }
  }
};
</script>
<style scoped></style>
