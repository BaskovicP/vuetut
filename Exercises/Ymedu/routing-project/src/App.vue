<template>
  <div id="app">
    <router-link to="/user" tag="button"> UserPage</router-link>
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

<style></style>
