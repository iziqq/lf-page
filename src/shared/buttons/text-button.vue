<script setup lang="ts">
interface Props {
  label: string;
}

const props = defineProps<Props>();

</script>

<template>
  <button
    type="button"
    class="text-button"
  >
    <slot name="icon-left" />
    <p class="text-button__label">
      {{ props.label }}
    </p>
    <slot name="icon-right" />
  </button>
</template>

<style scoped>
  .text-button{
    background: transparent;
    border: 2px solid var(--primary-20);
    border-radius: 24px;
    padding: 4px;

    position: relative;
    cursor: pointer;
    transition: 0.3s;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;

    &&:hover{
      background: var(--primary-20);
    }

    &&:active{
      background: var(--input-blue-hover);
    }
  }

  .text-button__label{
    font-size: 16px;
    font-weight: 500;
    color: #3c3c3c;
  }
</style>