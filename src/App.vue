<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { ref, watch } from 'vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const showLoading = ref(appStore.showLoading)
//const darkMode = ref(appStore.darkMode)

watch(() => appStore.showLoading, (newValue) => {
	showLoading.value = newValue
})
</script>

<template>
	<div class="dark:bg-slate-800 min-h-screen flex-col">
		<main class="flex-col">
			<loading-component v-show="showLoading" />
			<header-component />
			<router-view />
		</main>
		<footer-component class="fixed bottom-0 w-full text-center dark:bg-slate-800 bg-white"/>
	</div>
</template>