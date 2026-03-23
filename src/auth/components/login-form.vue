<script setup lang="ts">
import { ref } from 'vue';
import EmailInput from '@/shared/inputs/email-input.vue';
import PasswordInput from '@/shared/inputs/password-input.vue';
import TextButton from '@/shared/buttons/text-button.vue';
import type { EmailAddressResult, EmailAddress } from '@/common/domains/email-address.ts';
import type { PasswordResult, Password } from '@/common/domains/password.ts';

const emit = defineEmits<{
  (e: 'login', email: EmailAddress, password: Password): void;
}>();

const emailResult = ref<EmailAddressResult | null>(null);
const passwordResult = ref<PasswordResult | null>(null);

const handleLogin = () => {
  if (emailResult.value?.valid && passwordResult.value?.valid) {
    emit('login', emailResult.value.value, passwordResult.value.value);
  }
};

const isFormValid = () => {
  return emailResult.value?.valid && passwordResult.value?.valid;
};
</script>

<template>
  <form
    class="login-form"
    @submit.prevent="handleLogin"
  >
    <div class="login-form__logo">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
    </div>
    <h1>{{ $t('nav.login') }}</h1>
    <div class="login-form__data">
      <email-input
        default-value=""
        @update:model-value="emailResult = $event"
      />
      <password-input
        default-value=""
        @update:model-value="passwordResult = $event"
      />
      <text-button
        :label="$t('login')"
        class="login-form__button"
        :class="{ 'login-form__button--disabled': !isFormValid() }"
        @click="handleLogin"
      />
  </div>
  </form>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 50%;
  min-height: 480px;
  padding: 24px;
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid var(--main-gray-darker);
  border-radius: 16px;
}

.login-form__logo{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form__logo > .logo-img{
  width: 250px;
}

.login-form__data{
  flex: 1;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.login-form__button {
  margin-top: 8px;
}

.login-form__button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

h1{
  font-size: clamp(40px, 4.8vw, 64px);
  font-weight: 700;
  color: var(--main-orange);
}
</style>
