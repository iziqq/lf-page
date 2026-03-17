<script setup lang="ts">
import CommercialMenu from "@/commercial/components/commercial-menu.vue";
</script>

<template>
  <div class="commercial-layout">
    <commercial-menu />
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
  .commercial-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--main-gradient);
    min-height: 100dvh;
    width: 100dvw;
    overflow: hidden;
  }

  .content {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 20px;
  }

</style>
