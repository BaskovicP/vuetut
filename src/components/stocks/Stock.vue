<template>
  <div
    class="col-sm-6 col-md-6 col-lg-6 col-xl-4"
    style="margin-bottom: 1rem; min-width:470px">
    <div class="card card-success">
      <div class="card-header bg-success ">
        <h3 class="card-title text-white">
          {{ name }}
          <small>(Price: {{ price }})</small>
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
            :disabled="insufficientFunds">
            {{ insufficientFunds ? 'No funds' : 'Buy' }}
          </button>
          <button
            @click="sendToAnalysis"
            :class="isSelectedAnalysisClass"
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
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  data: () => ({ quantity: 0 }),
  computed: {
    ...mapGetters({
      funds: 'funds',
      analysedStocks: 'stocksToAnalyze'
    }),
    insufficientFunds: vm => vm.quantity * vm.price > vm.funds,
    isSelectedAnalysisClass: vm => vm.analysedStocks.includes(vm.id) ? 'btn btn-danger' : 'btn btn-success',
    returnStock: vm => name
  },
  methods: {
    ...mapActions({
      placeOrder: 'buyStock',
      analyzeThis: 'analyzeThis'
    }),
    sendToAnalysis() {
      this.analyzeThis(this.id);
    },
    buyStock() {
      const order = {
        stockId: this.id,
        stockPrice: this.price,
        quantity: +this.quantity
      };
      if (this.quantity > 0) this.placeOrder(order);
      this.quantity = 0;
    }
  }

};
</script>
