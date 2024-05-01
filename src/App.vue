<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'
import { storeToRefs } from 'pinia'
import { useUserStore } from './stores/userStore'
import { onMounted, watch } from 'vue'
import WelcomeModalComponent from '@/components/WelcomeModalComponent.vue'

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const appStore = useAppStore()

const { isLoading, darkMode } = storeToRefs(appStore)

watch(() => user.value, () => {
	if (user.value) {
		console.log(user.value)
		const { isDarkMode } = user.value.user_metadata
		appStore.setUserDarkModePreference(isDarkMode)
	}
})

watch(() => darkMode.value, () => {
	document.body.classList.toggle('dark', darkMode.value)
})

onMounted(() => {
	document.body.classList.toggle('dark', darkMode.value)
})
</script>

<template>
	<base target="_blank">
	<div
		class="min-h-screen flex-col dark:bg-slate-600 sm:bg-mario-light sm:dark:bg-mario-dark bg-bottom bg-no-repeat bg-cover">
		<loading-component v-show="isLoading" />
		<welcome-modal-component />
		<main class="flex-col">
			<header-component />
			<router-view />
			<!-- empty div allows to see all the content: not hidden by footer -->
			<div class="h-[102px]"></div>
		</main>
		<footer-component />
	</div>
</template>