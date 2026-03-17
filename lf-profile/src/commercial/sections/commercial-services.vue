<script setup lang="ts">

</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2>{{ $t('nav.services') }}</h2>
    </div>
  </section>
</template>

<style scoped>
  .services-section {
    min-height: 100vh;
    padding: 100px 20px;
    background: var(--main-black-light);
    color: var(--main-white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 40px;
    color: var(--main-orange);
  }
</style>
