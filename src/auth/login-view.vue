<script setup lang="ts">
import LoginForm from '@/auth/components/login-form.vue';
import {authStore} from "@/auth/backend/auth.store.ts";

const store = authStore();
</script>

<template>
  <div class="login-view">
    <login-form @login="store.tryLogin" />
  </div>
</template>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
