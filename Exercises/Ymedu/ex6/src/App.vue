<template>
  <div class="container">
    <Header></Header>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <List></List>
      </div>
      <div class="col-xs-12 col-sm-6">
        <Details></Details>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12">
        <ServerManagement></ServerManagement>
      </div>
    </div>
  </div>
</template>

<script>
//Localy registered components later used in the main app components
import Details from "./components/Details.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import ServerManagement from "./components/ServerManagement.vue";
export default {
  components: {
    Details,
    Header,
    List,
    ServerManagement
  }
};
</script>

<style></style>
