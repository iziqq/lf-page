<script setup lang="ts">
import { ref } from 'vue';
import WarningBadge from "@/shared/badges/warning-badge.vue";
import CorrectBadge from "@/shared/badges/correct-badge.vue";
import ErrorBadge from "@/shared/badges/error-badge.vue";

interface Props {
  invalid?: boolean;
  errorMessage?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{(e: 'update:modelValue', value: string): void; }>();

const localValue = ref("");

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  // Povolit pouze číslice a omezit délku na 6
  let value = target.value.replace(/\D/g, '').slice(0, 6);
  localValue.value = value;
  target.value = value;

  emit('update:modelValue', value);
}

const isWarning = () => {
  return localValue.value.length > 0 && localValue.value.length < 6;
}

const isCorrect = () => {
  return localValue.value.length === 6;
}
</script>

<template>
  <div class="input-wrapper">
    <p class="input-wrapper__label">
      {{ $t("auth.2faCode") }}
    </p>

    <input
        id="code"
        name="code"
        type="text"
        inputmode="numeric"
        pattern="[0-9]*"
        autocomplete="one-time-code"
        class="input-wrapper__input"
        :class="[
          isWarning() || invalid ? 'input-wrapper__error' : '',
          isCorrect() && !invalid ? 'input-wrapper__correct' : '',
        ]"
        :value="localValue"
        @input="handleInput"
        placeholder="000000"
    />

    <warning-badge
      v-if="isWarning() && !invalid"
      :tooltip-text="$t('validation.invalidCode')"
    />

    <correct-badge v-if="isCorrect() && !invalid" />

    <error-badge
      v-if="invalid"
      :tooltip-text="errorMessage"
    />
  </div>
</template>

<style scoped>
.input-wrapper__input {
  text-align: center;
  letter-spacing: 0.5em;
  font-size: 24px;
  font-weight: bold;
}

.input-wrapper__input::placeholder {
  letter-spacing: 0.5em;
  opacity: 0.3;
}
</style>
