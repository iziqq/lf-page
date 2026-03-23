<script setup lang="ts">
interface Props {
  tooltipText: string;
}

const props = defineProps<Props>();

</script>

<template>
    <span class="invalid-badge">
      !
    </span>
</template>

<style scoped>
  .invalid-badge{
    position: absolute;
    right: 8px;
    top: calc(50% - 2px);
    z-index: 3;

    border-radius: 50%;
    background: var(--error);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;

    color: var(--white);

    width: 32px;
    height: 32px;
  }
</style>
