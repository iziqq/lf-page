<script setup lang="ts">
import LoginForm from '@/auth/components/login-form.vue';
import Login2faForm from '@/auth/components/login-2fa-form.vue';
import {authStore} from "@/auth/backend/auth.store.ts";

const store = authStore();
</script>

<template>
  <div class="login-view">
    <login-form v-if="!store.is2faRequired" @login="store.tryLogin" />
    <login-2fa-form v-else @verify="store.verifyLogin" />
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
