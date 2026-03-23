<script setup lang="ts">
import {type EmailAddressResult, parseEmail} from "@/common/domains/email-address.ts";
import {onMounted, ref, watch} from "vue";
import WarningBadge from "@/shared/badges/warning-badge.vue";
import CorrectBadge from "@/shared/badges/correct-badge.vue";
import ErrorBadge from "@/shared/badges/error-badge.vue";

interface Props {
  defaultValue: string;
  hasError?: boolean;
  errorMessage?: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{(e: 'update:modelValue', value: EmailAddressResult): void; }>();

const localValue = ref("");
const showWarning = ref(false);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  localValue.value = value;

  validateEmail(value);
}

const validateEmail = (value: string) => {
  const parseValue = parseEmail(value);
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
  localValue.value = props.defaultValue;
})

watch(
    () => props.defaultValue,
    (newVal) => {
      localValue.value = newVal;
    }
);

</script>

<template>
  <div
    class="input-wrapper"
  >
    <p class="input-wrapper__label">
      {{ $t("email") }}
    </p>

    <input
        id="email"
        name="email"
        type="email"
        class="input-wrapper__input"
        :class="[
          isWarning() || hasError ? 'input-wrapper__error' : '',
          isCorrect() && !hasError ? 'input-wrapper__correct' : '',
        ]"
        :value="localValue"
        @input="handleInput"
    />

    <warning-badge
      v-if="isWarning() && !hasError"
      :tooltip-text="$t('validation.invalidEmail')"
    />

    <correct-badge v-if="isCorrect() && !hasError" />

    <error-badge
      v-if="hasError"
      :tooltip-text="errorMessage"
    />
  </div>

</template>

<style scoped>

</style>
