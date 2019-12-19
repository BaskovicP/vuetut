<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="color = 'appBlue'" class="btn btn-primary">
          Load Blue Template
        </button>
        <button @click="color = 'appGreen'" class="btn btn-success">
          Load Green Template
        </button>
        <button @click="color = 'appRed'" class="btn btn-danger">
          Load Red Template
        </button>
        <hr />
        <component :is="color">
          <p>
            Some random text that will be inserted into the default component
            slot
          </p>
          <h1 slot="heading">This beauty is {{ color }}</h1>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: () => ({
    color: "appBlue"
  }),
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style></style>
