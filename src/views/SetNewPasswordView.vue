<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useUserStore } from '@/stores/userStore'
import { useAppStore } from '@/stores/appStore'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'

const appStore = useAppStore

const router = useRouter()

const userStore = useUserStore()

const toast = useToast()

const triggerToast = (message, type) => {
    toast.open({
        message: message,
        type: type,
        position: 'bottom-right',
        duration: 3000,
        dismissible: true,
        pauseOnHover: true,
    })
}

const password = ref(undefined)
const confirmPassword = ref(undefined)

const updateUserPassword = async () => {
    if (password.value !== confirmPassword.value) {
        triggerToast('Passwords do not match', 'error')
        return
    }
    try {
        appStore.loading = true
        await userStore.setNewPassword(password.value)
        router.push('/')
        await userStore.setRecoveringPassword(false)
        triggerToast('Password updated successfully', 'success')
    } catch (error) {
        triggerToast(error.message, 'error')
    } finally {
        appStore.loading = false
    }
}
</script>

<template>
    <main class="flex-col">
        <div class="mt-10 sm:w-full sm:max-w-sm mx-auto">

            <form @submit.prevent="updateUserPassword" class="bg-white p-4 dark:bg-slate-800 rounded-md">
                <div class="mb-4">
                    <label for="password"
                        class="dark:text-white block text-sm font-medium leading-6 my-2 text-gray-900">
                        Update password
                    </label>
                    <input type="password" id="password" v-model="password" placeholder="Password"
                        class="dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
                    <label for="confirm-password"
                        class="dark:text-white block text-sm font-medium leading-6 my-2 text-gray-900">
                        Confirm password
                    </label>
                    <input type="password" id="confirm-password" v-model="confirmPassword"
                        placeholder="Confirm-password"
                        class="dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
                </div>
                <button-component type="submit"
                    class="ml-0 w-full bg-slate-500 text-white rounded-md py-2 px-4 hover:bg-slate-600 focus:outline-none">
                    Submit
                </button-component>
                <router-link to="/login" class="hover:underline dark:text-white">Back to login page</router-link>
            </form>
        </div>
    </main>
</template>