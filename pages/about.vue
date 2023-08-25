<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>About</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
</template>
