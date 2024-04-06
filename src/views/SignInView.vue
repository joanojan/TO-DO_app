<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue';
import SignUpPrompt from '@/components/SignUpPrompt.vue';

const router = useRouter()

const userStore = useUserStore()

const user = ref('')
const password = ref('')

const signIn = async () => {
	try {
		await userStore.signIn(user.value, password.value)
		router.push({ name: 'home' })
	} catch (error) {
		console.error(error)
		alert('signIn error')
	}
}

const signUp = () => {
	router.push({ name: 'signup' })
}

</script>

<template>
	<main>
		<form @submit.prevent="signIn">
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
				<input type="email" id="email" v-model="user" placeholder="Email"
					class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm shadow-outline focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
			</div>
			<div class="mb-4">
				<label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
				<input type="password" id="password" v-model="password" placeholder="Password"
					class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm shadow-outline focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
			</div>
			<ButtonComponent type="submit"
				class="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Sign In</ButtonComponent>
			<div v-if="userStore.error" class="text-red-500 text-sm mt-2">
				{{ userStore.error.message }}
			</div>
		</form>

		<SignUpPrompt @click="signUp" />
	</main>
</template>
