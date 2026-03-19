<script setup lang="ts">

</script>

<template>
  <section id="about" class="about-section">
    <div class="name-container">
      <h1 class="name">
        {{ $t('commercial.about.name') }}
      </h1>
    </div>
  </section>
</template>

<style scoped>
  .about-section {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    color: var(--main-white);
    padding: 0 20px;

    align-items: center;
    justify-content: center;
    gap: 100px;
  }

  @media (max-width: 1024px) {
    .about-section {
      flex-direction: column-reverse;
      gap: 40px;
      padding-top: 100px;
      justify-content: center;
    }

    .name-container {
      text-align: center;
      justify-content: center;
    }
  }

  .name-container{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
  }

  .name {
    font-size: clamp(40px, 4.8vw, 64px);
    font-weight: 700;
    color: var(--main-orange);
  }
</style>
