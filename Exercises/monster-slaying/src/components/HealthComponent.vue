<template>
  <div class="small-6 columns">
    <h1 class="text-center">{{ name }}</h1>
    <div class="healthbar">
      <div
        :id="name"
        class="healthbar text-center"
        style="background-color: green; margin: 0; color: white;"
        :style="{ width: health + '%' }"
      >
        {{ health }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthComponent",
  props: {
    name: String,
    health: { type: Number, default: 100 }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
