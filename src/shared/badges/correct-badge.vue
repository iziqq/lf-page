<script setup lang="ts">
import CheckIcon from "@/assets/icons/check-icon.vue";
</script>

<template>
    <span class="correct-badge">
      <check-icon class="correct-badge__icon" />
    </span>
</template>

<style scoped>
  .correct-badge{
    position: absolute;
    right: 8px;
    top: calc(50% - 2px);
    z-index: 3;

    border-radius: 50%;
    background: var(--success);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;

    width: 32px;
    height: 32px;
  }

  .correct-badge__icon{
    stroke: var(--white);
    stroke-width: 2px;
  }
</style>
