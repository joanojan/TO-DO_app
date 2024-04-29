<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { isLoading } = storeToRefs(appStore)
</script>

<template>
	<base target="_blank">
	<div class="min-h-screen flex-col dark:bg-slate-600 sm:bg-mario-light sm:dark:bg-mario-dark bg-bottom bg-no-repeat bg-cover">
		<loading-component v-show="isLoading" />
		<main class="flex-col">
			<header-component />
			<router-view />
			<!-- empty div allows to see all the content: not hidden by footer -->
			<div class="h-[102px]"></div>
		</main>
		<footer-component />
	</div>
</template>