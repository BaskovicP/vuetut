<template>
  <div>
    This is the SPECIAL MAIN TOP <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("About to enter the MainTop");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("About to LEAVE the MainTop");
    next();
  }
};
</script>

<style></style>
