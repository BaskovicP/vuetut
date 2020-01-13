<template>
  <div>
    You are in the user page. <br />
    And the passed id is: {{ this.id }}
    <br />
    <br />
    <router-link to="/user/changed"> Change url</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      console.log(from);
      this.id = to.params.id;
    }
  }
};
</script>

<style></style>
