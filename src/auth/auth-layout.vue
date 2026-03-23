<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="auth-layout">

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.auth-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--main-gradient);
  min-height: 100dvh;
  width: 100dvw;
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>
