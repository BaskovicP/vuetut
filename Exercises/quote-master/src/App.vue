<template>
  <div>
    <progress-bar id="joke" :num-quotes="numQuotes" />
    <quote-text :add-new-quote="addNewQuote" />
    <div class="quotes-container row">
      <single-quote v-for="quote in quotes" :key="'quotes-'+quote" style="margin-left:2rem;">
        {{ quote }}
      </single-quote>
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
    addNewQuote(value, numChars) {
      if (numChars >= 0) {
        this.quotes.push(value);
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
