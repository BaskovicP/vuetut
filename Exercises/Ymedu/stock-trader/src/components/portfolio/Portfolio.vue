<template>
  <div class="row">
    <div v-if="noStocks">Please buy some stocks, you don't want to end poor.</div>
    <app-stock v-for="stock in stocks" :key="stock.stockId" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    }),
    noStocks() { return this.stocks.length <= 0; }
  },
  components: {
    appStock: Stock
  }
};
</script>
