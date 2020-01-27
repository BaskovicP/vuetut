<template>
  <div id="app">
    <div v-if="stockData!==false && stockData.length>1">
      <GChart
        type="AreaChart"
        :data="stockData"
        :options="chartOptions" />
    </div>
    <div v-else> Please select a stock to analyse it (from the stocks menu) or press end day</div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
export default {
  name: 'app',
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartOptions: {
        chart: {
          title: 'Stock Performance',
          subtitle: 'Stock performance over days'
        }
      }
    };
  },
  computed: {
    stockData() {
      const allData = this.$store.getters.stockHistory;
      if (parseInt(this.$route.query.stock, 10) - 1 >= 0) {
        return allData[parseInt(this.$route.query.stock, 10) - 1];
      } else return false;
    }
  },
  components: {
    GChart
  }
};
</script>
