<template>
  <div class="col-sm-6 col-md-4">
    <div class="card text-white mb-3">
      <div class="card-header bg-success ">
        <h3 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="pull-left">
          <input
            v-model="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{danger: insufficientQuantity}">
        </div>
        <div class="pull-right">
          <button
            @click="sellStock"
            class="btn btn-success"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">
            {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
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
import { mapActions } from 'vuex';

export default {
  props: { stock: { type: [Object], required: true } },
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
