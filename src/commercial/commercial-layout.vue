<script setup lang="ts">
import CommercialMenu from "@/commercial/components/commercial-menu.vue";
import CommercialDevelopment from "@/commercial/sections/commercial-development.vue";
import CommercialAbout from "@/commercial/sections/commercial-about.vue";
import CommercialContact from "@/commercial/sections/commercial-contact.vue";
import CommercialReferences from "@/commercial/sections/commercial-references.vue";
import CommercialServices from "@/commercial/sections/commercial-services.vue";
import "./commercial-styles.css";
</script>

<template>
  <div class="commercial-layout">
    <commercial-menu />
    <main class="content">
      <commercial-about />
      <commercial-services />
      <commercial-references />
      <commercial-development />
      <commercial-contact />
    </main>
  </div>
</template>

<style scoped>
  .commercial-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    width: 100dvw;
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 20px;
  }

</style>
