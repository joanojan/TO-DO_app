import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const showLoading = ref(false)

  function displayLoading() {
    showLoading.value = true
  }
  function hideLoading() {
    showLoading.value = false
  }

  return { showLoading, displayLoading, hideLoading }
})
