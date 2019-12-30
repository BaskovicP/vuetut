<template>
  <div class="container">
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <section v-if="!formSubmited">
          <div class="form-group">
            <label>First Name</label>
            <input
              id="first-name"
              type="text"
              class="form-control"
              v-model="firstName"
            />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input
              id="last-name"
              type="text"
              class="form-control"
              v-model="lastName"
            />
          </div>
          <div class="form-group">
            <label>Mail</label>
            <input id="mail" type="email" class="form-control" v-model="mail" />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <label>Store data? </label>
            <label
              ><input type="radio" value="Yes" v-model="storeInDatabase" /> Yes
            </label>

            <label
              ><input type="radio" value="No" v-model="storeInDatabase" />No
            </label>
          </div>
          <button
          id="main-submit-button"
            class="primary"
            type="submit"
            @click.prevent="formSubmited = !formSubmited"
          >
            Sunmit all data here
          </button>
          </section>

          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="formSubmited">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail:{{ mail }}</p>
            <p>Password:{{ password }}</p>
            <p>Store in Database?: {{ storeInDatabase }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      mail: "",
      password: "",
      storeInDatabase: "Yes",
      formSubmited: false
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
};
</script>

<style></style>
