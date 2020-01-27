<template>
  <div id="app">
    <div v-if="stockData(1).length>1">
      <section v-for="item in analysis" :key="'chart'+ item">
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
export default {
  name: 'app',
  data() {
    return {
      stocks: [],
      chartOptions: {
        chart: {
          title: 'Stock Performance',
          subtitle: 'Stock performance over days'
        }
      }
    };
  },
  computed: {

    analysis() {
      return this.$store.getters.stockstToAnalyze;
    }
  },
  methods: {
    stockData(value) {
      const fetchStock = parseInt(value, 10) - 1;
      const allData = this.$store.getters.stockHistory;
      if (fetchStock >= 0) {
        return allData[fetchStock];
      } else return false;
    }
  },
  components: {
    GChart
  }
};
</script>
