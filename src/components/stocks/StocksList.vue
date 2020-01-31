<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      :key="stock.stockId"
      @buyStock="buyStock"
      @sendToAnalysis="sendToAnalysis"
      :funds="funds"
      :analysed-stocks="analysedStocks"
      v-bind="stock" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: mapGetters({
    stocks: 'stocks',
    funds: 'funds',
    analysedStocks: 'stocksToAnalyze'
  }),
  methods: {
    ...mapActions({
      placeOrder: 'buyStock',
      analyzeThis: 'analyzeThis'
    }),
    sendToAnalysis(id) {
      this.analyzeThis(id);
    },
    buyStock(stockInfo) {
      this.placeOrder(stockInfo);
    }
  },
  components: {
    appStock: Stock
  }
};
</script>
