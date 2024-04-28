<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification'
import { useAppStore } from '@/stores/appStore'

const props = defineProps({
    provider: String
})

const appStore = useAppStore()

const toast = useToast()

const triggerToast = (message) => {
    toast.open({
        message: message,
        type: 'error',
        position: 'bottom-right',
        duration: 3000,
        dismissible: true,
        pauseOnHover: true,
    })
}

const router = useRouter()

const userStore = useUserStore()

const user = ref('')

const signIn = async () => {
    try {
        appStore.showLoading()
        user.value = await userStore.signInWithProvider(props.provider)
        router.push({ name: 'home' })
    } catch (error) {
        triggerToast('Something went wrong!')
    } finally {
        appStore.hideLoading()
    }
}
</script>

<template>
    <button @click="signIn" class="hover:bg-slate-400 hover:border-2 flex items-center bg-white dark:bg-slate-800 dark:text-white rounded-lg p-2">
        <div v-if="provider === 'google'" class="flex">
            <img src="@/assets/icons/google.svg" alt="Google" class="w-6 h-6 mx-2" />
            <span class="mx-2">Sign in with Google</span>
        </div>
        <div v-if="provider === 'github'" class="flex">
            <img src="@/assets/icons/github.svg" alt="Github" class="w-6 h-6 mx-2 dark:hidden" />
            <img src="@/assets/icons/github-dark.svg" alt="Github" class="w-6 h-6 mx-2 hidden dark:flex" />
            <span class="mx-2">Sign in with Github</span>
        </div>
    </button>
</template>