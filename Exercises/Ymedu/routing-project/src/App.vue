<template>
  <div id="app">
    <router-link to="/user/123" tag="button" active-class="my-active" exact>
      UserPage</router-link
    >
    <br />
    <br />
    <button @click="leadMeToSomewhere">
      Imperative jump
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    leadMeToSomewhere() {
      this.$router.push("/newPage");
    }
  }
};
</script>

<style>
.my-active {
  color: blue;
  border: 2px solid blue;
}
</style>
