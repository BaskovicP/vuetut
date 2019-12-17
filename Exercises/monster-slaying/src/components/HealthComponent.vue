<template>
  <div class="small-6 columns">
    <h1 class="text-center">{{ name }}</h1>
    <div class="healthbar">
      <div
        :id="name"
        :style="{ width: health + '%' }"
        class="healthbar text-center"
        style="background-color: green; margin: 0; color: white;">
        {{ health }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'health-component',
  props: {
    name: { type: String, required: true },
    health: { type: Number, default: 100 }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
