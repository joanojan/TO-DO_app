<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const user = ref('')
const password = ref('')

const signIn = async () => {
	try {
		await userStore.signIn(user.value, password.value)
		router.push({ name: 'home' })
	} catch (error) {
		alert('Error login')
	}
}

const signUp = () => {
	router.push({ name: 'signup' })
}

</script>

<template>
	<main>
		<form @submit.prevent="signIn">
			<input type="email" v-model="user" placeholder="Email" />
			<input type="password" v-model="password" placeholder="Password" />
			<button type="submit">Sign In</button>
			<div v-if="userStore.error">{{ userStore.error.message }}</div>
		</form>

		<button @click="signUp">Sing Up</button>
	</main>
</template>

<style scoped></style>