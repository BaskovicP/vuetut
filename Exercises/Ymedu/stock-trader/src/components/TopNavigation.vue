<template>
  <div id="top-navigation-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-header">
        <router-link
          class="navbar-brand"
          to="/"
          tag="a">
          StockTrader
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        ata-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              active-class="nav-link active"
              class="nav-link"
              to="/portfolio"
              tag="a">
              Portfolio
            </router-link>
            <!-- <a class="nav-link" href="#">Portfolio </a> -->
          </li>
          <li class="nav-item">
            <router-link
              active-class="nav-link active"
              class="nav-link"
              to="/stocks"
              tag="a">
              Stocks
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="nav-link active"
              class="nav-link"
              to="/analysis"
              tag="a">
              Analysis
            </router-link>
          </li>
          <li class="nav-item">
            <a
              @click="endDay"
              id="end-day-btn"
              class="nav-link"
              href="#">End Day</a>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              Day number:
              <span
                id="day-number"
                style="color: black">{{ day }}</span>
            </div>
          </li>
        </ul>
        <span class="navbar-text">
          FUNDS: {{ funds | currency }}
        </span>
      </div>
    </nav>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      funds: 'funds',
      day: 'day'
    })
  },
  methods: {
    ...mapActions({
      endDay: 'randomizeStocks'
    })
  }
};
</script>

<style scoped>
#top-navigation-wrapper {
  margin-bottom: 1rem;
}
</style>
