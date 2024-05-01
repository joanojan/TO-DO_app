import { defineStore } from 'pinia'
import { ref } from 'vue'
import { updateDarkModePreference } from '@/api/userApi'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)

  const darkMode = ref(false)

  const toogleDarkMode = async () => {
    darkMode.value = !darkMode.value
  }

  const setUserDarkModePreference = (isDarkMode) => {
    darkMode.value = isDarkMode
  }

  const persistDarkMode = async () => {
    await updateDarkModePreference(darkMode.value)
  }

  function showLoading() {
    isLoading.value = true
  }
  function hideLoading() {
    isLoading.value = false
  }

  return { isLoading, darkMode, toogleDarkMode, showLoading, hideLoading, setUserDarkModePreference, persistDarkMode }
})
