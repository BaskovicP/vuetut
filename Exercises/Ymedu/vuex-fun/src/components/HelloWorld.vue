<template>
  <div>
    Hello dear world <br />
    The counter is {{ counter }} <br />
    <button @click="increase">Increase</button> <br />
    <button @click="decrease">Decreaes</button>
  </div></template
>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      counter: "doubleCounter"
    })
  },
  methods: {
    ...mapMutations({
      increase: "increment",
      decrease: "decrement"
    })
  }
};
</script>
<style scoped></style>
