<template>
  <div class="row">
    <app-stock v-for="stock in stocks" :key="stock.stockId" v-bind="stock" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: mapGetters({ stocks: 'stocks' }),
  components: {
    appStock: Stock
  }
};
</script>
