<script setup lang="ts">

</script>

<template>
  <section id="about" class="about-section">
    <div class="name-container">
      <div class="logo-wrapper">
        <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
      </div>
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

  .logo-wrapper {
    position: absolute;
    left: -80px;
    top: -80px;
    animation: float 6s ease-in-out infinite;
  }

  .logo-img{
    width: 120px;
    transform: rotate(-30deg);
    animation: shake 10s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes float-mobile {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes shake {
    0%, 90%, 100% {
      transform: rotate(-30deg);
    }
    92% {
      transform: rotate(-35deg);
    }
    94% {
      transform: rotate(-25deg);
    }
    96% {
      transform: rotate(-35deg);
    }
    98% {
      transform: rotate(-25deg);
    }
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

    .logo-wrapper {
      position: absolute;
      left: calc(50% - 30px);
      top: -60px;
      animation: float-mobile 5s ease-in-out infinite;
    }

    .logo-img{
      width: 60px;
      transform: rotate(-30deg);
      animation: shake 15s ease-in-out infinite;
    }
  }
</style>
