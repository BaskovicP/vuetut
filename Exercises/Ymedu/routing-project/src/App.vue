<template>
  <div id="app">
    <router-link to="/user/edit" tag="button" active-class="my-active" exact>
      UserPage</router-link
    >
    <br />
    <br />
    <button @click="leadMeToSomewhere">
      Imperative jump
    </button>
    <br />
    <br />
    <div>Here comes the router part of the page:</div>
    <br />
    <br />
    <br />
    <hr />
    Default view: <br />
    <router-view></router-view>
    <hr />
    Named viw: <br />
    <router-view name="main-top"></router-view>
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
