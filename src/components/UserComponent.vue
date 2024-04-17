<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const isDropdownOpen = ref(false) // Track dropdown state

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const router = useRouter()

const userStore = useUserStore()

const user = ref(userStore.user)

const signOut = () => {
	userStore.signOut()
	router.push({ name: 'signin' })
}

</script>

<template>
    <div class="relative inline-block text-left">
        <div>
            <button 
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                @click="toggleDropdown">
                {{ user.email }}
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div 
            v-if="isDropdownOpen"
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <RouterLink 
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" to="/">
                    Tasks
                </RouterLink>
                <RouterLink 
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" to="/about">
                    About
                </RouterLink>
                <button 
                    @click="signOut"
                    type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100" role="menuitem"
                    tabindex="-1" id="menu-item-3">Sign out
                </button>
            </div>
        </div>
    </div>
</template>