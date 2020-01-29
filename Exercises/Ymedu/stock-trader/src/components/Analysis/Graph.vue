<template>
  <section>
    <h3>{{ stockName }}:</h3>
    <GChart
      type="AreaChart"
      :data="stockData"
      :options="chartOptions" />
  </section>
</template>

<script>
import { GChart } from 'vue-google-charts';
const chartOptions = {
  chart: {
    title: 'Stock Performance',
    subtitle: 'Stock performance over days'
  },
  colors: ['orange'],
  height: 300
};
export default {
  props: {
    stockData: { type: Array, required: true },
    stockName: { type: String, required: true }
  },
  computed: { chartOptions: vm => chartOptions },
  components: { GChart }
};
</script>
