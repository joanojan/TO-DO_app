import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)

  const darkMode = ref((() => {
    const storedPref = localStorage.getItem('darkMode')
    if (storedPref) {
      return storedPref === 'true'
    }
    return false
  })())

  const toogleDarkMode = async () => {
    darkMode.value =!darkMode.value    
    localStorage.setItem('darkMode', darkMode.value ? 'true' : 'false')
  }

  function showLoading() {
    isLoading.value = true
  }
  function hideLoading() {
    isLoading.value = false
  }

  return { isLoading, darkMode, toogleDarkMode, showLoading, hideLoading }
})
