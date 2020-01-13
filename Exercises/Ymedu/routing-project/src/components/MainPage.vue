<template>
  <section>
    <div>MAIN PAGE, just the skeleton</div>
    <div>
      Click here to go to a named route:
      <router-link
        :tag="button"
        :to="{ name: 'user', params: { id: 12345678 } }"
      >
        Click here to go to name</router-link
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
