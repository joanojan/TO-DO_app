<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, watch } from 'vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const showLoading = ref(appStore.showLoading)
//const darkMode = ref(appStore.darkMode)

watch(() => appStore.showLoading, (newValue) => {
	showLoading.value = newValue
})
</script>

<template>
	<base target="_blank">
	<div class="min-h-screen flex-col">
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
@media only screen and (min-width: 400px) {
	div {
		background: url(/src/assets/icons/canigo.jpg) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
}
</style>