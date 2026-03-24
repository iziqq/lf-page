<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import WarningBadge from "@/shared/badges/warning-badge.vue";
import {parsePassword, type PasswordResult} from "@/common/domains/password.ts";
import CorrectBadge from "@/shared/badges/correct-badge.vue";
import EyeIcon from "@/assets/icons/eye-icon.vue";
import EyeClosedIcon from "@/assets/icons/eye-closed-icon.vue";
import ErrorBadge from "@/shared/badges/error-badge.vue";

interface Props {
  defaultValue?: string;
  label?: string;
  invalid?: boolean;
  isPasswordAgain?: boolean;
  mainPassword?: string | null;
  showForgotPassword?: boolean;
  errorMessage?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: PasswordResult): void;
  (e: 'recover-password'): void;
}>();

const localValue = ref("");
const showWarning = ref(false);
const showPassword = ref(false);
let inputType: 'text' | 'password' = "password";

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  localValue.value = value;

  validateEmail(value);
}

const handleRecoveryPassword = () => {
  emit('recover-password');
}

const handleShowPassword = () => {
  showPassword.value = !showPassword.value;
  if (showPassword.value)
    inputType = "text";
  else
    inputType = "password";
}

const validateEmail = (value: string) => {
    const parseValue = parsePassword(value);

    if (props.isPasswordAgain)
      parseValue.valid = parseValue.valid && localValue.value === props.mainPassword;

    showWarning.value = ! parseValue.valid;
    emit('update:modelValue', parseValue);
};

const showLabel = () => {
  return localValue.value.length === 0;
}

const isWarning = () => {
  return localValue.value.length > 0 && showWarning.value;
}

const isCorrect = () => {
  return localValue.value.length > 0 && !showWarning.value;
}

onMounted(() => {
  localValue.value = props.defaultValue ?? '';
})

watch(
    () => props.defaultValue,
    (newVal) => {
      localValue.value = newVal ?? '';
    }
);

</script>

<template>
  <div class="input-wrapper">
    <p class="input-wrapper__label">
      {{ label ? label : $t('password') }}
    </p>

    <input
        id="password"
        name="password"
        :type="inputType"
        class="input-wrapper__input"
        :class="[
          isWarning() || invalid ? 'input-wrapper__error' : '',
          isCorrect() && !invalid ? 'input-wrapper__correct' : '',
        ]"
        :value="localValue"
        @input="handleInput"
    />

    <button
      type="button"
      class="password-eye-button"
      :class="[
          isCorrect() ? 'password-eye-button-correct' : '',
          isWarning() ? 'password-eye-button-warning' : '',
          invalid ? 'password-eye-button-warning' : '',
      ]"
      @click.prevent="handleShowPassword"
    >
      <eye-icon
        v-if="showPassword"
        class="password-eye-button__icon-visible"
      />
      <eye-closed-icon
        v-else
        class="password-eye-button__icon-hidden"
      />
    </button>

    <warning-badge
      v-if="isWarning() && !invalid"
      :tooltip-text="isPasswordAgain ? $t('validation.invalidPasswordAgain') : $t('validation.invalidPassword')"
    />

    <error-badge
      v-if="invalid"
      :tooltip-text="errorMessage"
    />

    <correct-badge v-if="isCorrect() && !invalid" />
</div>
</template>

<style scoped>
  .input-wrapper{
    z-index: 2;
  }

  .password-eye-button{
    border: none;
    background: transparent;
    padding: 0;

    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 2px);
    right: 8px;

    z-index: 4;

    cursor: pointer;
  }

  .password-eye-button__icon-visible, .password-eye-button__icon-hidden{
    stroke: var(--white);
    stroke-width: 1.5px;
  }

  .password-eye-button-correct, .password-eye-button-warning{
    right: 48px;
  }
</style>
