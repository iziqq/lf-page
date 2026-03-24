<script setup lang="ts">
import {ref} from 'vue';
import EmailInput from '@/shared/inputs/email-input.vue';
import PasswordInput from '@/shared/inputs/password-input.vue';
import AppButton from '@/shared/buttons/app-button.vue';
import type {EmailAddressResult} from '@/common/domains/email-address.ts';
import type {PasswordResult} from '@/common/domains/password.ts';
import {type LoginRequest, LoginRequestSchema} from "@/auth/backend/dto/login.request.ts";
import {
  getValidationErrorForField,
  parseEntity,
  type ParseResponse
} from "@/common/parse-entity.ts";

const emit = defineEmits<{
  (e: 'login', loginRequest: LoginRequest): void;
}>();

const loginRequest = ref<LoginRequest>({ email: '', password: ''});
const parsedLoginRequest = ref<ParseResponse<LoginRequest> | null>(null);

const handleEmailChange = (result: EmailAddressResult) => {
  loginRequest.value.email = result.valid ? result.value : '';
  parseLoginRequest();
}

const handlePasswordChange = (result: PasswordResult) => {
  loginRequest.value.password = result.valid ? result.value : '';
  parseLoginRequest();
}

const parseLoginRequest = () => {
  parsedLoginRequest.value = parseEntity(loginRequest.value, LoginRequestSchema)
}

const handleLogin = () => {
  emit('login', loginRequest.value);
};
</script>

<template>
  <form
    class="login-form"
    @submit.prevent="handleLogin"
  >
    <div class="login-form__header">
      <div class="login-form__logo">
        <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
      </div>
      <h1>{{ $t('nav.login') }}</h1>
    </div>

    <div class="login-form__data">
      <email-input
        :invalid="getValidationErrorForField(parsedLoginRequest,'email')"
        @update:model-value="handleEmailChange"
      />
      <password-input
        :invalid="getValidationErrorForField(parsedLoginRequest,'password')"
        @update:model-value="handlePasswordChange"
      />
      <app-button
        variant="primary"
        :label="$t('login')"
        class="login-form__button"
        :disabled="parsedLoginRequest == null || !parsedLoginRequest.valid"
        @click="handleLogin"
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

/* Override app-button internal label color if needed */
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
