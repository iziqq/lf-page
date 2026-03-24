<script setup lang="ts">

import {type Ref, ref} from "vue";
import { useRouter } from "vue-router";
import { useCommercialStore } from "@/commercial/backend/commercial.store.ts";

const commercialStore = useCommercialStore();
const router = useRouter();

type MenuItem = {
  label: string,
  href: string
}

const menuItems: Ref<MenuItem[]> = ref([
  { label: 'nav.about', href: '#about' },
  { label: 'nav.services', href: '#services' },
  { label: 'nav.references', href: '#references' },
  { label: 'nav.development', href: '#development' },
  { label: 'nav.contact', href: '#contact' },
])

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const goToLogin = () => {
  router.push('/auth');
  closeMenu();
}
</script>

<template>
  <nav class="nav-wrapper" :class="{ 'menu-open': isMenuOpen }">
    <div class="menu-container">
      <div class="logo-section">
        <img src="@/assets/logo.svg" alt="Logo" class="logo-img" />
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger"></span>
      </button>

      <div class="menu-content">
        <div class="menu-buttons">
          <a
            v-for="item in menuItems"
            :key="item.label"
            :href="item.href"
            class="menu-item"
            :class="{ active: commercialStore.activeSection === item.href }"
            @click="commercialStore.setActiveSection(item.href); closeMenu()"
          >
            {{ $t(item.label) }}
          </a>
        </div>

        <div class="login-section">
          <router-link
            to="/auth"
            class="menu-item login-button"
            @click="goToLogin"
          >
            {{ $t('nav.login') }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .nav-wrapper {
    position: fixed;
    top: 20px;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    width: 100%;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .menu-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    background: rgba(26, 26, 26, 0.7);
    backdrop-filter: blur(10px);
    padding: 8px 24px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: var(--main-box-shadow);
    pointer-events: auto;
    height: 48px;
    width: auto;
    max-width: 95%;
  }

  .logo-section {
    display: flex;
    align-items: center;
  }

  .logo-img {
    width: 32px;
    height: 32px;
  }

  .menu-content {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .menu-buttons {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .menu-item {
    color: var(--main-white);
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item:hover, .menu-item.active {
    color: var(--main-orange);
  }

  .login-section {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 24px;
  }

  /* Hamburger Button */
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
  }

  .hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--main-white);
    position: relative;
    transition: background 0.3s;
  }

  .hamburger::before, .hamburger::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: var(--main-white);
    transition: all 0.3s;
  }

  .hamburger::before { top: -8px; }
  .hamburger::after { bottom: -8px; }

  /* Mobile Styles */
  @media (max-width: 1024px) {
    .menu-container {
      gap: 20px;
      padding: 8px 16px;
    }

    .menu-content {
      gap: 20px;
    }

    .menu-buttons {
      gap: 16px;
    }

    .menu-item {
      font-size: 14px;
    }
  }

  @media (max-width: 850px) {
    .menu-toggle {
      display: block;
    }

    .menu-content {
      position: fixed;
      top: 0;
      right: -320px;
      width: 280px;
      height: 100vh;
      background: rgba(26, 26, 26, 0.95);
      backdrop-filter: blur(20px);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
      padding: 60px 20px;
      pointer-events: auto;
    }

    .menu-open .menu-content {
      right: 0;
    }

    .menu-buttons {
      flex-direction: column;
      gap: 30px;
    }

    .login-section {
      border-left: none;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-left: 0;
      padding-top: 30px;
      width: 100%;
      text-align: center;
    }

    .menu-item {
      font-size: 20px;
    }

    /* Hamburger animation */
    .menu-open .hamburger {
      background: transparent;
    }
    .menu-open .hamburger::before {
      transform: rotate(45deg) translate(6px, 6px);
    }
    .menu-open .hamburger::after {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    .nav-wrapper {
      top: 0;
      justify-content: center;
    }

    .menu-container {
      width: 100%;
      max-width: 100%;
      border-radius: 0;
      border-left: none;
      border-right: none;
      border-top: none;
      justify-content: space-between;
      height: 60px;
    }
  }
</style>
