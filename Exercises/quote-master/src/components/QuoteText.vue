<template>
  <div class="row container">
    <div class="column-xl-8">
      <div class="row">
        <div class="column-xl-8">
          <h4 id="text-box-heading">Quote</h4>
        </div>
      </div>
      <div class="row">
        <div class="column-xl-8">
          <textarea
            v-model="enteredText"
            id="insertQuote"
            name=""
            cols="80"
            rows="10"
            placeholder="Please enter quote text here"></textarea>
        </div>
      </div>
      <div id="button-row" class="row">
        <div class="column-xl-2">
          <button
            @click="deleteAndSend(enteredText);"
            id="add-quote-button"
            class="btn btn-primary">
            Add Quote
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addNewQuote: { type: Function, required: true }
  },
  data: () => ({
    enteredText: ''

  }),
  methods: {
    deleteAndSend(value) {
      this.addNewQuote(value, this.enteredText.length);
      this.enteredText = '';
    }
  }

};
</script>

<style>
.row {
  margin-top: 0.5rem;
}
.container {

 justify-content: center
}
#insertQuote {
 justify-content: center
}
#button-row {
 justify-content: center
}
</style>
