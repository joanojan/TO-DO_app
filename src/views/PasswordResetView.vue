<script setup>
import { useUserStore } from '@/stores/userStore';
import ButtonComponent from '@/components/ButtonComponent.vue'
import CheckEmailComponent from '@/components/CheckEmailComponent.vue';
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css'

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

const success = ref(false)

const email = ref(undefined)

const userStore = useUserStore()

const resetPassword = async () => {
    try {
        await userStore.passwordReset(email.value)
        success.value = true
        triggerToast('Password reset email sent', 'info')
        //TODO: guard the route, check if user is recovering the password...
        //await userStore.setRecoveringPassword(true)
        //This would trigger an error: because user is not authenticated here!
        // So we cannot use this trick to know if the user is resetting the password.
    } catch (error) {
        triggerToast(error.message, 'error')
    }
}
</script>

<template>
    <check-email-component v-if="success" />
    <div v-else class="flex justify-center">
        <form @submit.prevent="resetPassword" class="bg-white p-4 dark:bg-slate-800 rounded-md">
            <label for="email"
                class="flex justify-between dark:text-white block text-sm font-medium leading-6 my-2 text-gray-900">
                Email
            </label>
            <input type="email" id="email" v-model="email" placeholder="Email"
                class="dark:caret-white dark:text-white dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
            <button-component type="submit"
                class="ml-0 w-full bg-slate-500 text-white rounded-md py-2 px-4 hover:bg-slate-600 focus:outline-none">
                Submit
            </button-component>
            <router-link to="/login" class="hover:underline dark:text-white">Back to login page</router-link>
        </form>
    </div>
</template>