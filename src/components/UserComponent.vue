<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';

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


const appStore = useAppStore()

const isDropdownOpen = ref(false)

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const router = useRouter()
const route = useRoute()

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const userName = user.value?.user_metadata.full_name || null

const signOut = async () => {
    try {
        appStore.showLoading()
        await userStore.signOut()
        triggerToast('Signed out successfully', 'info')
        router.push({ name: 'signin' })
    } catch (error) {
        triggerToast('Sign out failed', 'error')
    } finally {
        appStore.hideLoading()
    }
}

const handleMenuItemClick = (route) => {
    toggleDropdown()
    router.push(route)
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('#dropdown')) {
        isDropdownOpen.value = false;
    }
})
</script>

<template>
    <div id="dropdown" class="relative inline-block text-left">
        <div>
            <button
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                @click="toggleDropdown">
                {{ userName ? userName : user.email }}
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div v-if="isDropdownOpen"
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <a v-if="route.path !== '/'" @click="handleMenuItemClick('/')"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1">
                    Home
                </a>
                <a v-if="route.path !== '/tasks'" @click="handleMenuItemClick('/tasks')"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1">
                    Tasks
                </a>
                <a v-if="route.path !== '/about'" @click="handleMenuItemClick('/about')"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1">
                    About
                </a>
                <button @click="signOut" type="submit"
                    class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100" role="menuitem"
                    tabindex="-1" id="menu-item-3">Sign out
                </button>
            </div>
        </div>
    </div>
</template>
