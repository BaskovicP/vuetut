<template>
  <section>
    <div>MAIN PAGE, just the skeleton</div>
    <div>
      <router-link
        :to="{
          name: 'user',
          params: { id: 12345678 },
          query: { name: 'paulo' }
        }"
      >
        Click here to go to named route</router-link
      >
      <router-view name="main-top"></router-view>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
