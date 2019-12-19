<template>
  <div class="progressContainer row">
    <div class="col-xl-10">
      <h3 id="progressHeading">Quotes Added</h3>
      <div class="progress">
        <div
          id="progressBar"
          class="progress-bar"
          role="progressbar"
          style="width: 25%;"
          :aria-valuenow="numQuotes"
          aria-valuemin="0"
          :aria-valuemax="maxQuotes">
          {{ numQuotes }}/10
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numQuotes: { type: Number, required: true },
    maxQuotes: { type: Number, default: 10 }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progressContainer {
  display: flex;
  justify-content: center;
}
</style>
