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

//The component will be rehused for every provider.

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
        appStore.displayLoading()
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
    <button @click="signIn" class="flex items-center">
        <slot />
    </button>
</template>