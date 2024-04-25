<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'

const props = defineProps({
    provider: String
})

//The component will be rehused for every provider.

const appStore = useAppStore()

const { showLoading } = storeToRefs(appStore)

const toast = useToast()

const triggerToast = (message) => {
    toast.open({
        message: message,
        type: 'error',
        position: 'bottom-right',
        duration: 6000,
        dismissible: true,
        pauseOnHover: true,
    })
}

const router = useRouter()

const userStore = useUserStore()

const user = ref('')

const signIn = async () => {
    try { 
        debugger
        showLoading.value = true
        user.value = await userStore.signInWithProvider(props.provider)
        router.push({ name: 'home' })
    } catch (error) {
        triggerToast('Something went wrong!')
    } finally {
        showLoading.value = false
    }
}
</script>

<template>
    <button @click="signIn" class="flex items-center">
        <slot />
    </button>
</template>