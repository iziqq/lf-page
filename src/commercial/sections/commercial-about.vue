<script setup lang="ts">

</script>

<template>
  <section id="about" class="about-section">
    <div class="name-container">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
      <h1 class="description">
        {{ $t('commercial.about.description') }}
      </h1>
      <h3 class="name">
        {{ $t('commercial.about.name') }}
      </h3>
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

  .name-container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  .description {
    font-size: clamp(40px, 4.8vw, 64px);
    font-weight: 700;
    color: var(--main-orange);
  }

  .name{
    font-size: clamp(20px, 2.8vw, 32px);
    font-weight: 400;
  }

  .logo-img{
    position: absolute;
    left: -80px;
    top: -80px;
    width: 120px;
    transform: rotate(-30deg);
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
      align-items: center;
    }

    .logo-img{
      position: absolute;
      left: calc(50% - 30px);
      top: -60px;
      width: 60px;
      transform: rotate(-30deg);
    }
  }
</style>
