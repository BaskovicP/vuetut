<template>
  <div class="row">
    <div v-if="!userHasStocks">Please buy some stocks, you don't want to end poor.</div>
    <app-stock v-for="stock in stocks" :key="stock.stockId" v-bind="stock" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({ stocks: 'stockPortfolio' }),
    userHasStocks: vm => vm.stocks.length > 0
  },
  components: {
    appStock: Stock
  }
};
</script>
