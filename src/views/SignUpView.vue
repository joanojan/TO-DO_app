<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import ButtonComponent from "@/components/ButtonComponent.vue"
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';
import { useAppStore } from '@/stores/appStore'
import SignPromptComponent from '@/components/SignPromptComponent.vue'
import CheckEmailComponent from '@/components/CheckEmailComponent.vue'


const router = useRouter()

const appStore = useAppStore()

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

const userStore = useUserStore()

const success = ref(false)

const form = ref({
    email: "",
    password: "",
    confirmPassword: ""
});

const handleSubmit = async () => {
    try {
        if (form.value.password !== form.value.confirmPassword) {
            triggerToast("Passwords do not match", "error")
            return
        }
        appStore.showLoading()
        await userStore.signUp(form.value.email, form.value.password)
        success.value = true
        triggerToast("Email sent to " + form.value.email, "success")
    } catch (error) {
        triggerToast('Something went wrong!', 'error')
    } finally {
        appStore.hideLoading()
    }
}

const signIn = () => {
    router.push({ name: 'signin' })
}
</script>

<template>
    <main class="flex-col">
        <div v-if="success">
            <check-email-component />
        </div>
        <div v-if="!success" class="mt-10 sm:w-full sm:max-w-sm mx-auto">

            <form @submit.prevent="handleSubmit" class="bg-white p-4 dark:bg-slate-800 rounded-md">
                <div class="mb-4">
                    <label for="email" class="text-white block my-2 text-sm font-medium leading-6 text-gray-900">Email
                        address</label>
                    <input type="email" id="email" v-model="form.email" placeholder="Email"
                        class="dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
                </div>
                <div class="mb-4">
                    <label for="password"
                        class="text-white block text-sm font-medium leading-6 my-2 text-gray-900">Password</label>
                    <input type="password" id="password" v-model="form.password" placeholder="Password"
                        class="dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
                    <label for="confirm-password" class="text-white block text-sm font-medium leading-6 my-2 text-gray-900">Confirm
                        password</label>
                    <input type="password" id="confirm-password" v-model="form.confirmPassword"
                        placeholder="Confirm-password"
                        class="dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
                </div>
                <button-component type="submit"
                    class="ml-0 w-full bg-slate-500 text-white rounded-md py-2 px-4 hover:bg-slate-600 focus:outline-none">
                    Sign Up
                </button-component>
            </form>
            <sign-prompt-component signIn @click="signIn" />
        </div>
    </main>
</template>