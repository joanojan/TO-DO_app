<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification'
import { useAppStore } from '@/stores/appStore'
import { ref } from 'vue'

const disabled = ref(false)

const props = defineProps({
    provider: String
})

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

const router = useRouter()

const userStore = useUserStore()

const signIn = async () => {
    try {
        disabled.value = true
        appStore.showLoading()
        await userStore.signInWithProvider(props.provider)
        router.push({ name: 'home' })
        triggerToast('Signed in successfully', 'info')
    } catch (error) {
        triggerToast('Something went wrong!', 'error')
    } finally {
        appStore.hideLoading()
    }
}
</script>

<template>
    <button :class="{ disabled: disabled }" @click="signIn"
        class="mb-2 hover:bg-slate-400 border-2 border-tranparent hover:border-black flex items-center bg-white dark:bg-slate-800 dark:text-white rounded-lg p-2">
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