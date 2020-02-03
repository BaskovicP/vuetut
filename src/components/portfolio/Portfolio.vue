<template>
  <div class="row">
    <div v-if="!userHasStocks">Please buy some stocks, you don't want to end poor.</div>
    <app-stock v-for="stock in stocks" :key="stock.stockId" @sellStock="sellStock" v-bind="stock" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({ stocks: 'stockPortfolio' }),
    userHasStocks: vm => vm.stocks.length > 0
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock(stock) {
      const order = {
        stockId: stock.id,
        stockPrice: stock.price,
        quantity: stock.quantity
      };
      this.placeSellOrder(order);
    }
  },
  components: {
    appStock: Stock
  }
};
</script>
