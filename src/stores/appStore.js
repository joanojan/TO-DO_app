import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)

  function showLoading() {
    isLoading.value = true
  }
  function hideLoading() {
    isLoading.value = false
  }

  return { isLoading, showLoading, hideLoading }
})
