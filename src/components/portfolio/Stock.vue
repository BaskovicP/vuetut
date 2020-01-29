<template>
  <div
    class="col-sm-6 col-md-6 col-lg-6 col-xl-4"
    style="margin-bottom: 1rem; min-width:470px">
    <div class="card text-white mb-3">
      <div class="card-header bg-success ">
        <h3 class="card-title">
          {{ name }}
          <small>{{ cardHeader }}</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            v-model="localQuantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            :class="{danger: insufficientlocalQuantity}">
        </div>
        <div class="float-right">
          <button
            @click="sellThisStock"
            class="btn btn-success"
            :disabled="sellBtnIsDisabled">
            {{ insufficientlocalQuantity ? 'Not enough' : 'Sell' }}
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
  props: {
    id: { type: Number, required: true },
    quantity: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  data: () => ({ localQuantity: 0 }),
  computed: {
    insufficientlocalQuantity: vm => vm.localQuantity > vm.quantity,
    cardHeader: vm => `(Price: ${vm.price} | Quantity: ${vm.quantity})`,
    sellBtnIsDisabled: vm => vm.insufficientlocalQuantity || (vm.localQuantity <= 0)
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellThisStock() {
      const order = {
        stockId: this.id,
        stockPrice: this.price,
        quantity: parseInt(this.localQuantity, 10)
      };
      this.placeSellOrder(order);
    }
  }
};
</script>
