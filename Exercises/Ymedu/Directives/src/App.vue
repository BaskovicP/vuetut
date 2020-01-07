<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 v-myon:click="consoleLog('Don\'t you click on me!!!!')">
          Directives Exercise
        </h1>
        <h1 v-myon:mouseover="consoleLog('PLease do not touch me!!!')">
          Directives Exercise moody
        </h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myon: {
      bind(el, binding, vnode) {
        el.addEventListener(binding.arg, binding.value);
      }
    }
  },
  methods: {
      // we use this method because vue prefixes all the function calls in template with _vm
    consoleLog(message) {
      return () => console.log(message);
    }
  }
};
</script>

<style></style>
