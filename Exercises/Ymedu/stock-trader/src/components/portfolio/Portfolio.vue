<template>
  <div class="row">
    <div v-if="stocks.length<=0">Please buy some stocks, you don't want to end poor.</div>
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
    })
  },
  components: {
    appStock: Stock
  }
};
</script>
