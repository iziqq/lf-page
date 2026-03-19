<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h2 class="commercial-watermark">
    {{ text }}
  </h2>
</template>

<style scoped>
/* Styly jsou definovány globálně v commercial-styles.css */
</style>
