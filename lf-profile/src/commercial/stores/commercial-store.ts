import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommercialStore = defineStore('commercial', () => {
  const activeSection = ref('#about')

  const setActiveSection = (section: string) => {
    activeSection.value = section
  }

  return {
    activeSection,
    setActiveSection
  }
})
