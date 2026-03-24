<script setup lang="ts">
import { ref } from 'vue';
import CodeInput from '@/shared/inputs/code-input.vue';
import AppButton from '@/shared/buttons/app-button.vue';

const emit = defineEmits<{
  (e: 'verify', code: string): void;
}>();

const code = ref('');

const handleVerify = () => {
  if (code.value.length === 6) {
    emit('verify', code.value);
  }
};
</script>

<template>
  <form
    class="login-form"
    @submit.prevent="handleVerify"
  >
    <div class="login-form__header">
      <div class="login-form__logo">
        <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
      </div>
      <h1>{{ $t('auth.2faTitle') }}</h1>
      <p class="login-form__description">{{ $t('auth.2faDescription') }}</p>
    </div>

    <div class="login-form__data">
      <code-input
        @update:model-value="(val) => code = val"
      />
      <app-button
        variant="primary"
        :label="$t('verify')"
        class="login-form__button"
        :disabled="code.length !== 6"
        @click="handleVerify"
      />
    </div>
  </form>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  min-height: 520px;
  padding: 48px 40px;
  background: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(74, 74, 74, 0.5);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-form:hover {
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
}

.login-form__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  gap: 24px;
}

.login-form__description {
  color: var(--white);
  text-align: center;
  opacity: 0.8;
  margin: 0;
}

.login-form__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.login-form__logo > .logo-img {
  width: 160px;
  height: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.login-form__data {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.login-form__button {
  margin-top: 16px;
  width: 100%;
}

:deep(.app-button__label) {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.5px;
}

h1 {
  font-size: clamp(32px, 5vw, 42px);
  font-weight: 800;
  color: var(--main-orange);
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}

@media (max-width: 600px) {
  .login-form {
    padding: 32px 24px;
    border-radius: 0;
    min-height: 100vh;
    max-width: 100%;
    justify-content: center;
  }
}
</style>
