<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const user = ref('')
const password = ref('')

const signIn = () => {
	userStore.signIn(user.value, password.value)
	router.push({ name: 'home' })
}
</script>

<template>
	<main>
		<h1>Sign In View!</h1>
		<label>
			User:
			<input type="text" v-model="user" />
		</label>
		<label>
			Password:
			<input type="password" v-model="password" />
		</label>

		<button @click="signIn">Sign In</button>
	</main>
</template>

<style scoped>
</style>