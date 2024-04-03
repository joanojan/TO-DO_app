<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const user = ref('')
const password = ref('')

const signIn = async () => {
	await userStore.signIn(user.value, password.value)
	router.push({ name: 'home' })
}

const signUp = () => {
	router.push({ name: 'signup' })
}

</script>

<template>
	<main>
		<h1>Sign In View!</h1>
		<form>
			<label>
				User:
				<input autocomplete="off" type="text" v-model="user" />
			</label>
			<label>
				Password:
				<input type="password" v-model="password" />
			</label>
		</form>

		<button @click="signIn">Sign In</button>
		<button @click="signUp">Sing Up</button>
	</main>
</template>

<style scoped></style>