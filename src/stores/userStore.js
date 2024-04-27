import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, createNewUser, logIn, logOut, loginWithProvider, resetPassword } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(undefined)

  const error = ref(undefined)

  // Getters
  const userName = computed(() => {
    return user.value?.user_metadata.full_name || ''
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

  // TODO: password reset supabase functionality
  async function passwordReset(email) {
    user.value = await resetPassword(email)
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
    signInWithProvider,
    passwordReset
  }
})
