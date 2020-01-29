<template>
  <div id="app">
    <div v-if="stockHistory[1].length>1">
      <section v-for="stockId in analysis" :key="'chart'+ stockId">
        <graph :stock-data="stockHistory[stockId-1]" :stock-name="getStockName(stockId)" />
      </section>
    </div>
    <div v-else>End the current day.</div>
    <div v-if="analysis.length===0">Please select a stock from the stock tab</div>
  </div>
</template>

<script>
import Graph from './Graph.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: mapGetters({
    getStocks: 'stocks',
    analysis: 'stocksToAnalyze',
    stockHistory: 'stockHistory'
  }),
  methods: {
    getStockName(stockId) {
      return this.getStocks.find(({ id }) => id === stockId).name;
    }
  },
  components: {
    Graph
  }
};
</script>
