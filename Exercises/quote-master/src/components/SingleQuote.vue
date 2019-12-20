<template>
  <div class="row container">
    <div id="main-text" class="column-xl-8">
      {{ quoteText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteText: { type: String, required: true }
  }
};
</script>

<style>

</style>
