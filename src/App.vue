<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref, watch } from 'vue'
import LoadingComponent from './components/LoadingComponent.vue'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const showLoading = ref(appStore.showLoading)

watch(() => appStore.showLoading, (newValue) => {
	showLoading.value = newValue
})

</script>

<template>
		<loading-component v-show="showLoading" />
		<header-component />
		<router-view />
</template>
 