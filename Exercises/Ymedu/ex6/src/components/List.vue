<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="index in 5" :key="index + '.key'">
      Server #{{ index }}
    </li>
  </ul>
</template>
<script>
export default {};
</script>
