<script setup>
import { useAppStore } from '@/stores/appStore'
import { storeToRefs } from 'pinia';

const appStore = useAppStore()

const { darkMode }= storeToRefs(appStore)

</script>
<template>
    <main>
        <button @click="appStore.toogleDarkMode()" class="w-12 bg-slate-200 justify-center rounded-full border-2 flex">
            <img src="/src/assets/icons/moon.svg" alt="dark-mode" v-if="darkMode">
            <img src="/src/assets/icons/sun.svg" alt="light-mode" v-if="!darkMode">
        </button>
    </main>
</template>