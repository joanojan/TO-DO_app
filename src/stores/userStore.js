import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, updateRecoveringPassword, createNewUser, logIn, logOut, loginWithProvider, resetPassword, updatePassword } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(undefined)
  
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

  //sends an email to the user to reset their password
  async function passwordReset(email) {
    await resetPassword(email)
  }

  async function setNewPassword(newPassword) {
    await updatePassword(newPassword)
  }

  //TODO: to guard the route for logged in users
  async function setRecoveringPassword(isRecoveringPassword) {
    await updateRecoveringPassword(isRecoveringPassword)
  }

  return {
    // State
    user,
    // Getters
    userName,
    // Actions
    fetchUser,
    signUp,
    signIn,
    signOut,
    signInWithProvider,
    passwordReset,
    setNewPassword,
    setRecoveringPassword
  }
})
