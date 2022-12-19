import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAppConfigStore = defineStore('AppConfig', () => {
  const state = reactive({
    direction: 'ltr'
  })



  return { state }
})
