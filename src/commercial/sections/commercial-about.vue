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
    animation: logo-sequence-wrapper 60s ease-in-out infinite;
  }

  .logo-img{
    width: 120px;
    animation: logo-sequence-img 60s ease-in-out infinite;
  }

  @keyframes logo-sequence-wrapper {
    0%, 50% { transform: translate(0, 0); }
    58% { transform: translate(380px, 0); } /* Reposition Right (5s) */
    67% { transform: translate(380px, 0); } /* Idle (5s) */
    75% { transform: translate(380px, 15px); } /* Float Start (5s) */
    83% { transform: translate(380px, 0); } /* Float End (5s) */
    92% { transform: translate(380px, 0); }
    100% { transform: translate(0, 0); } /* Reposition Left (5s) */
  }

  @keyframes logo-sequence-img {
    0%, 50% { transform: rotate(-30deg); } /* rotate-head idle */
    25% { transform: rotate(30deg); }

    50%, 58% { transform: rotate(-30deg); }

    58%, 60% { transform: rotate(-30deg); } /* Start Shake at right */
    61% { transform: rotate(-35deg); }
    62% { transform: rotate(-25deg); }
    63% { transform: rotate(-35deg); }
    64% { transform: rotate(-25deg); }
    65% { transform: rotate(-30deg); } /* End Shake */

    65%, 100% { transform: rotate(-30deg); } /* rotate-head back to idle */
  }

  @keyframes rotate-head {
    0% {
      transform: rotate(-30deg);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(-30deg);
    }
  }
  @keyframes reposition-right {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(380px);
    }
  }
  @keyframes reposition-left {
    0% {
      transform: translateX(380px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes shake {
    0%, 90%, 100% {
      transform: rotate(0deg);
    }
    92% {
      transform: rotate(-25deg);
    }
    94% {
      transform: rotate(25deg);
    }
    96% {
      transform: rotate(-25deg);
    }
    98% {
      transform: rotate(25deg);
    }
  }

  @keyframes float-mobile {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes shake-mobile {
    0%, 90%, 100% {
      transform: rotate(0deg);
    }
    92% {
      transform: rotate(-5deg);
    }
    94% {
      transform: rotate(5deg);
    }
    96% {
      transform: rotate(-5deg);
    }
    98% {
      transform: rotate(5deg);
    }
  }

  @keyframes logo-sequence-mobile-wrapper {
    0%, 50% { transform: translateY(0); }
    75% { transform: translateY(10px); }
    100% { transform: translateY(0); }
  }

  @keyframes logo-sequence-mobile-img {
    0%, 50% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(0deg); }

    90% { transform: rotate(0deg); }
    92% { transform: rotate(-5deg); }
    94% { transform: rotate(5deg); }
    96% { transform: rotate(-5deg); }
    98% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
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
      animation: logo-sequence-mobile-wrapper 30s ease-in-out infinite;
    }

    .logo-img{
      width: 60px;
      transform: rotate(0deg);
      animation: logo-sequence-mobile-img 30s ease-in-out infinite;
    }
  }
</style>
