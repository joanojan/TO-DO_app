<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { watch } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

const { showLoading } = storeToRefs(appStore)

watch(() => appStore.showLoading, (newValue) => {
	showLoading.value = newValue
})
</script>

<template>
	<base target="_blank">
	<div class="min-h-screen flex-col dark:bg-slate-800">
		<loading-component v-show="showLoading" />
		<main class="flex-col">
			<header-component />
			<router-view />
			<!-- empty div allows to see all the content: not hidden by footer -->
			<div class="h-[108px]"></div>
		</main>
		<footer-component />
	</div>
</template>

<style scoped>
@media only screen and (min-width: 768px) {
	div {
		background: url(/src/assets/icons/canigo.jpg) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
}
</style>