<script setup>
import { useAppStore } from '@/stores/appStore'
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';

const appStore = useAppStore()
const userStore = useUserStore()

const { darkMode } = storeToRefs(appStore)
const { user } = storeToRefs(userStore)

const _handleChangeDarkMode = async () => {
    appStore.toogleDarkMode()
    try {

        if (user.value) {
            await appStore.persistDarkMode()
        } 
    } catch(err) {
        console.error(err)
    }
}

</script>
<template>
    <main>
        <button @click="_handleChangeDarkMode" class="w-12 bg-slate-200 justify-center rounded-full border-2 flex">
            <img src="/src/assets/icons/moon.svg" alt="dark-mode" v-if="darkMode">
            <img src="/src/assets/icons/sun.svg" alt="light-mode" v-if="!darkMode">
        </button>
    </main>
</template>