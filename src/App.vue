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
	<div class="min-h-screen flex-col dark:bg-slate-800">
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

<style scoped>
@media only screen and (min-width: 768px) {
	div {
		background: url(/src/assets/background/mario.jpg) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
}
</style>