<template>
  <div id="app">
    <div v-if="stockData(1).length>1">
      <section v-for="item in analysis" :key="'chart'+ item">
        <h3>{{ getStocks.filter(stock=> stock.id===item )[0].name }}:</h3>
        <GChart
          type="AreaChart"
          :data="stockData(item)"
          :options="chartOptions" />
      </section>
    </div>
    <div v-else>End the current day.</div>
    <div v-if="analysis.length===0">Please select a stock from the stock tab</div>
  </div>
</template>

<script>

import { GChart } from 'vue-google-charts';
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  data: () => ({

    stocks: [],
    chartOptions: {
      chart: {
        title: 'Stock Performance',
        subtitle: 'Stock performance over days'
      },
      colors: ['orange', 'red', 'green'],
      height: 300
    }
  }),
  computed: {
    ...mapGetters({
      getStocks: 'stocks',
      analysis: 'stocksToAnalyze',
      stockHistory: 'stockHistory'
    })
  },
  methods: {
    stockData(value) {
      const fetchStock = parseInt(value, 10) - 1;
      const allData = this.stockHistory;
      if (fetchStock >= 0) {
        return allData[fetchStock];
      } else return false;
    }
  },
  getStockName(id) {
    return this.getStocks.filter(item => item.id === id).name;
  },

  components: {
    GChart
  }
};
</script>
