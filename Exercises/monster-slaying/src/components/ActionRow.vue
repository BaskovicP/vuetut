<template>
  <li :class="dynamicCss">
    {{ msg }}
  </li>
</template>

<script>
export default {
  name: "ActionRow",
  props: {
    msg: { type: String, default: "" }
  },
  computed: {
    dynamicCss: function() {
      return this.msg.split(" ")[0] === "MONSTER" ? "red" : "blue";
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
