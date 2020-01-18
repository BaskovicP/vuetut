<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :key="stock.stockId" :stock="stock" />
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
    random() {
      return Math.random();
    }
  },
  components: {
    appStock: Stock
  }
};
</script>
