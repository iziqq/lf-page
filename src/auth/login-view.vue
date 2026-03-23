<script setup lang="ts">
import LoginForm from '@/auth/components/login-form.vue';
import type { EmailAddress } from '@/common/domains/email-address.ts';
import type { Password } from '@/common/domains/password.ts';

const onLogin = (email: EmailAddress, password: Password) => {
  console.log('Login attempt with:', { email, password });
  // Zde se později napojí auth.service
};
</script>

<template>
  <div class="login-view">
    <login-form @login="onLogin" />
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
