<template>
  <div>
    Hello dear world <br />
    The counter is {{ counter }} <br />
    <button @click="increment">Increase</button> <br />
    <button @click="decrement">Decreaes</button> <br />
    <button @click="asyncIncrement({ by: 10, time: 2000 })">
      Async increase
    </button>
    <br />
    <br />
    <input type="text" name="randomInput" id="my-input" v-model="value" />
    <br />
    <br />
    {{ textValue }}
    <input type="text" v-model="textValue" />
    <button @click="write">Console log it all</button>
  </div></template
>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      counter: "doubleCounter"
    }),
    ...mapGetters("writing", ["getText"]),
    value: {
      get() {
        return this.$store.getters.normalCounter;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    },
    textValue: {
      get() {
        return this.getText;
      },
      set(value) {
        this.setText(value);
      }
    }
  },
  methods: {
    ...mapActions(["increment", "decrement", "asyncIncrement"]),
    ...mapActions("writing", ["setText"]),
    write() {
      console.log(this);
    }
  }
};
</script>
<style scoped></style>
