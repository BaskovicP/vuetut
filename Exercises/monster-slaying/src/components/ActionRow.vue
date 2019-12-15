<template>
  <li :class="dynamicCss">
    {{ subject }} HITS {{ acusativus }} FOR {{ damage }} {{critical}}
  </li>
</template>

<script>
export default {
  name: "ActionRow",
  props: {
    subject: String,
    acusativus: String,
    damage: Number,
    critical: { default: "", type: String }
  },
  computed: {
    dynamicCss: function() {
      return this.subject === "MONSTER" ? "red" : "blue";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  color: red;
  background-color: #f8c1c9;
  padding-bottom: 3px;
}
.blue {
  color: blue;
  background-color: #e9e8ff;
  padding-bottom: 3px;
}
</style>
