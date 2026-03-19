<script setup lang="ts">

</script>

<template>
  <section id="about" class="about-section">
    <div class="name-container">
      <h1 class="name">
        {{ $t('commercial.about.name') }}
      </h1>
      <h4 class="description">
        {{ $t('commercial.about.description') }}
      </h4>
    </div>

    <div class="image-container">

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

    .image-container {
      width: 100%;
      max-width: 350px;
      height: 500px;
    }
  }

  .name-container{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
  }

  .image-container{
    flex: 1;

    width: 450px;
    height: 850px;

    border: 2px solid var(--main-white);
    border-radius: 16px;
    box-shadow: var(--main-box-shadow);
  }

  .name {
    font-size: clamp(40px, 4.8vw, 64px);
    font-weight: 700;
    color: var(--main-orange);
  }

  .description {
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    margin-bottom: 40px;
    color: var(--main-gray);
    font-weight: 300;
  }

  .cta-button {
    display: inline-block;
    padding: 16px 32px;
    width: fit-content;
    background: var(--main-orange);
    color: var(--main-white);
    text-decoration: none;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-family: Inter, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;

    &&:hover {
      background: var(--main-orange-dark);
      box-shadow: 0 10px 20px rgba(255, 107, 53, 0.2);
    }
  }
</style>
