<script setup lang="ts">
import CommercialMenu from "@/commercial/components/commercial-menu.vue";
import CommercialDevelopment from "@/commercial/sections/commercial-development.vue";
import CommercialAbout from "@/commercial/sections/commercial-about.vue";
import CommercialContact from "@/commercial/sections/commercial-contact.vue";
import CommercialReferences from "@/commercial/sections/commercial-references.vue";
import CommercialServices from "@/commercial/sections/commercial-services.vue";
</script>

<template>
  <div class="commercial-layout">
    <commercial-menu />
    <main class="content">
      <commercial-about />
      <commercial-development />
      <commercial-references />
      <commercial-services />
      <commercial-contact />
    </main>
  </div>
</template>

<style scoped>
  .commercial-layout {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--main-gradient);
    min-height: 100dvh;
    width: 100dvw;
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 20px;
  }

</style>
