import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, createNewUser, logIn, logOut, loginWithProvider } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(undefined)

  const error = ref(undefined)

  // Getters
  const userName = computed(() => {
    //TODO
    return user.value?.name || ''
  })

  // Actions -> Errors to be handled by the views/components
  async function fetchUser() {
    user.value = await fetchActualUser()
  }

  async function signUp(email, password) {
    user.value = await createNewUser(email, password)
  }

  async function signIn(email, password) {
    user.value = await logIn(email, password)
  }

  async function signOut() {
    user.value = await logOut()
  }

  async function signInWithProvider(provider) {
    user.value = await loginWithProvider(provider)
  }



  return {
    // State
    user,
    error,
    // Getters
    userName,
    // Actions
    fetchUser,
    signUp,
    signIn,
    signOut,
    signInWithProvider
  }
})
