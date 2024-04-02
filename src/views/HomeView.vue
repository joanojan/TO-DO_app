<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const signOut = () => {
	userStore.signOut()
	router.push({ name: 'signin'})
}
</script>

<template>
	<main>
		<button @click="signOut">Sign Out</button>
		<h1>Home View!</h1>
	</main>
</template>

<style scoped>
</style>