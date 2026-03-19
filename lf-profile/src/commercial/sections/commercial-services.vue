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
    color: var(--main-white);
  }

  @media (max-width: 768px) {
    .services-section {
      padding: 80px 20px;
    }

    h2 {
      font-size: 2.5rem;
      text-align: center;
    }
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
