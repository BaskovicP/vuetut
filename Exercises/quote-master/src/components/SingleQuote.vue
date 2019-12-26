<template>
  <div @click="sendDeleteEvent" class="column-xl-8 main-text">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true }
  },
  methods: {
    sendDeleteEvent() {
      this.$emit('delete', this.id);
    }
  }
};
</script>

<style>
.main-text {
  font-family: cursive;
  border: 1px solid black;
  padding: 0.5rem;
}
</style>
