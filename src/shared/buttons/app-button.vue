<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  label?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const buttonClasses = computed(() => [
  'app-button',
  `app-button--${props.variant}`,
  `app-button--${props.size}`,
  {
    'app-button--disabled': props.disabled || props.loading,
    'app-button--loading': props.loading,
    'app-button--full-width': props.fullWidth,
  },
]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<template>
  <button
    :type="props.type"
    :class="buttonClasses"
    :disabled="props.disabled || props.loading"
    @click="handleClick"
  >
    <span v-if="props.loading" class="app-button__loader">
      <span class="loader-dot"></span>
      <span class="loader-dot"></span>
      <span class="loader-dot"></span>
    </span>

    <span v-else class="app-button__content">
      <slot name="icon-left" />

      <span v-if="props.label || $slots.default" class="app-button__label">
        <slot>{{ props.label }}</slot>
      </span>

      <slot name="icon-right" />
    </span>
  </button>
</template>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  outline: none;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}

.app-button--full-width {
  width: 100%;
}

/* Sizes */
.app-button--sm {
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  gap: 8px;
}

.app-button--md {
  height: 48px;
  padding: 0 24px;
  font-size: 16px;
  gap: 10px;
}

.app-button--lg {
  height: 56px;
  padding: 0 32px;
  font-size: 18px;
  gap: 12px;
}

/* Variants */
.app-button--primary {
  background: var(--main-orange);
  color: var(--main-white);
  box-shadow: 0 4px 14px 0 rgba(255, 107, 53, 0.39);
}

.app-button--primary:hover:not(:disabled) {
  background: var(--main-orange-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.45);
}

.app-button--primary:active:not(:disabled) {
  transform: translateY(0);
}

.app-button--secondary {
  background: var(--main-black-light);
  color: var(--main-white);
  border: 1px solid var(--main-gray-darker);
}

.app-button--secondary:hover:not(:disabled) {
  background: var(--main-gray-darker);
  transform: translateY(-2px);
}

.app-button--outline {
  background: transparent;
  color: var(--main-orange);
  border: 2px solid var(--main-orange);
}

.app-button--outline:hover:not(:disabled) {
  background: rgba(255, 107, 53, 0.1);
  transform: translateY(-2px);
}

.app-button--ghost {
  background: transparent;
  color: var(--main-white);
}

.app-button--ghost:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.app-button--danger {
  background: var(--error);
  color: var(--main-white);
}

.app-button--danger:hover:not(:disabled) {
  background: var(--error-hover);
  transform: translateY(-2px);
}

/* States */
.app-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* Loader */
.app-button__loader {
  display: flex;
  align-items: center;
  gap: 4px;
}

.loader-dot {
  width: 6px;
  height: 6px;
  background-color: currentColor;
  border-radius: 50%;
  display: inline-block;
  animation: dot-pulse 1.4s infinite ease-in-out both;
}

.loader-dot:nth-child(1) { animation-delay: -0.32s; }
.loader-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes dot-pulse {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1.1); opacity: 1; }
}

.app-button__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: inherit;
}

.app-button__label {
  display: flex;
  align-items: center;
}
</style>
