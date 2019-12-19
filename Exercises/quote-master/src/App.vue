<template>
  <div>
    <progress-bar id="joke" :num-quotes="numQuotes" />
    <quote-text />
  </div>
</template>

<script>
import ProgressBar from './components/ProgressBar';
import QuoteText from './components/QuoteText';
export default {
  name: 'app',
  data: () => ({
    numQuotes: 0
  }),
  components: {
    'progress-bar': ProgressBar,
    'quote-text': QuoteText
  }
};
</script>

<style>

</style>
