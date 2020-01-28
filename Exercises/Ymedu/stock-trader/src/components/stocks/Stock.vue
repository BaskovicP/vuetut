<template>
  <div
    class="col-sm-6 col-md-6 col-lg-6 col-xl-4"
    style="margin-bottom: 1rem; min-width:470px">
    <div class="card card-success">
      <div class="card-header bg-success ">
        <h3 class="card-title text-white">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body ">
        <div class="float-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{danger: insufficientFunds}">
        </div>
        <div class="float-right">
          <button
            @click="buyStock"
            class="btn btn-success"
            :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)">
            {{ insufficientFunds ? 'No funds' : 'Buy' }}
          </button>
          <button
            @click="sendToAnalysis"
            :class=" analysedStocks.includes(stock.id) ? 'btn btn-danger': 'btn btn-success'"
            style="margin-left:0.5rem">
            Analyze
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
export default {
  props: {
    stock: { type: Object, required: true }
  },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    analysedStocks() {
      return this.$store.getters.stocksToAnalyze;
    }
  },
  methods: {
    sendToAnalysis() {
      this.$store.dispatch('analyzeThis', this.stock.id);
    },
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      if (this.quantity > 0) { this.$store.dispatch('buyStock', order); }
      this.quantity = 0;
    }
  }
};
</script>
