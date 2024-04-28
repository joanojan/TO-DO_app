import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)

  const darkMode = ref(true)

  const toogleDarkMode = () => {
    darkMode.value =!darkMode.value
    document.body.classList.toggle('dark')
    localStorage.setItem('darkMode', darkMode.value ? 'true' : 'false')
  }

  const setInitialDarkMode = () => {
    const storedPref = localStorage.getItem('darkMode')
    if (storedPref) {
      darkMode.value = storedPref === 'true'
    }
  }

  setInitialDarkMode()

  function showLoading() {
    isLoading.value = true
  }
  function hideLoading() {
    isLoading.value = false
  }

  return { isLoading, darkMode, toogleDarkMode, showLoading, hideLoading }
})
