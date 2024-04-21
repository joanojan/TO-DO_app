
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const showLoading = ref(false)
  const darkMode = ref(localStorage.getItem('darkMode') === 'true')

  return { showLoading, darkMode }
})