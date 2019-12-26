<template>
  <div>
    <progress-bar id="joke" :num-quotes="numQuotes" />
    <quote-text :add-new-quote="addNewQuote" />
    <div class="quotes-container row">
      <single-quote
        v-for="quote in quotes" :key="'quotes-'+ quote.msg" @delete="deleteElement" :id="quote.id"
        style="margin-left:2rem;">
        {{ quote.msg }}
      </single-quote>
    </div>
    <div class="alert alert-info">
      <strong>Info!</strong> Clicking on the single quote deleates that quote.
    </div>
  </div>
</template>

<script>

import ProgressBar from './components/ProgressBar';
import QuoteText from './components/QuoteText';
import SingleQuote from './components/SingleQuote';
export default {
  name: 'app',
  data: () => ({
    numQuotes: 0,
    quotes: []
  }),
  methods: {
    deleteElement(elementIndex) {
      this.quotes.splice(elementIndex, 1);
      this.numQuotes--;
    },
    addNewQuote(value, numChars) {
      if (numChars > 0 && this.numQuotes < 10) {
        this.quotes.push({ id: this.numQuotes, msg: value });
        this.numQuotes++;
      }
    }
  },
  components: {
    'progress-bar': ProgressBar,
    'quote-text': QuoteText,
    'single-quote': SingleQuote
  }
};
</script>

<style scoped>
.quotes-container {
  margin: 2rem;

  justify-content: center;
}
</style>
