<script setup>
import { useAppStore } from '@/stores/appStore'
import { ref } from 'vue'

const appStore = useAppStore()

const darkMode = ref(appStore.darkMode)

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    //update the DOM to reflect the changes
    document.body.classList.toggle('dark')
}

</script>
<template>
    <main>
        <button @click="toggleDarkMode" class="w-20 bg-slate-200 justify-center rounded-full border-2 flex">
            <img src="@/assets/icons/moon.svg" alt="dark-mode" v-if="!darkMode">
            <img src="@/assets/icons/sun.svg" alt="dark-mode" v-if="darkMode" class="justify-end">
        </button>
    </main>
</template>