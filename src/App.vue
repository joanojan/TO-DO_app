<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { ref, watch } from 'vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const showLoading = ref(appStore.showLoading)
const darkMode = ref(appStore.darkMode)

watch(() => appStore.showLoading, (newValue) => {
	showLoading.value = newValue
})
</script>

<template>
	<div id="app" :class="{ 'dark': darkMode }" class="dark:bg-slate-800 .p-0">
		<loading-component v-show="showLoading" />
		<header-component />
		<router-view />
		<footer-component />
	</div>
</template>