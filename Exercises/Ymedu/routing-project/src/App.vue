<template>
  <div id="app">
    <router-link to="/user" tag="button" active-class="my-active">
      UserPage</router-link
    >
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.my-active {
  color: blue;
  border: 2px solid blue;
}
</style>
