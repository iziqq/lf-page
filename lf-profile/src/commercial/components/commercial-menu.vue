<script setup lang="ts">

import {type Ref, ref} from "vue";
import { useCommercialStore } from "@/commercial/stores/commercial-store";

const commercialStore = useCommercialStore();

type MenuItem = {
  label: string,
  href: string
}

const menuItems: Ref<MenuItem[]> = ref([
  { label: 'nav.about', href: '#about' },
  { label: 'nav.development', href: '#development' },
  { label: 'nav.references', href: '#references' },
  { label: 'nav.services', href: '#services' },
  { label: 'nav.contact', href: '#contact' },
])

</script>

<template>
  <nav class="top-bar">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
    </div>
    <div class="menu-container">
      <a
        v-for="item in menuItems"
        :key="item.label"
        :href="item.href"
        class="menu-item"
        :class="{ active: commercialStore.activeSection === item.href }"
        @click="commercialStore.setActiveSection(item.href)"
      >
        {{ $t(item.label) }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
  .top-bar {
    position: sticky;
    top: 20px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    gap: 20px;
  }

  .logo {
    display: flex;
    align-items: center;
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(10px);
    padding: 8px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }

  .logo-img {
    width: 32px;
    height: 32px;
  }

  .menu-container {
    display: flex;
    gap: 30px;
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(10px);
    padding: 12px 30px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }

  .menu-item {
    color: var(--main-white);
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .menu-item:hover, .menu-item.active {
    color: var(--main-orange);
  }
</style>
