<template>
  <div class="col-sm-6 col-md-4">
    <div class="card card-success">
      <div class="card-header bg-success ">
        <h3 class="card-title text-white">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </div>
      <div class="card-body ">
        <div class="pull-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{danger: insufficientFunds}">
        </div>
        <div class="pull-right">
          <button
            @click="buyStock"
            class="btn btn-success"
            :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)">
            {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
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
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    }
  }
};
</script>
