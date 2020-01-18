<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/" tag="a">StockTrader</router-link>
      </div>
      <button
        class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/portfolio" tag="a">Portfolio <span class="sr-only">(current)</span></router-link>
            <!-- <a class="nav-link" href="#">Portfolio </a> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/stocks" tag="a">Stocks</router-link>
          </li>
          <li class="nav-item">
            <a @click="endDay" href="#">End Day</a>
          </li>

          <!-- <li class="nav-item dropdown">
            <a
              id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
              data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> -->
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul> -->
        </ul>
        <span class="navbar-text">
          FUNDS: {{ funds }}
        </span>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    endDay() {
      console.log('This one should end the day');
    }
  }
};
</script>

<style></style>
