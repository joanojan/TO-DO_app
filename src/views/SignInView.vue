<script setup>
import SignInGoogleBtnComponent from '@/components/SignInGoogleBtnComponent.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'
import SignUpPrompt from '@/components/SignUpPrompt.vue'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const { showLoading } = storeToRefs(appStore)

const toast = useToast()

const triggerToast = (message) => {
    toast.open({
        message: message,
        type: 'error',
        position: 'top',
        duration: 6000,
        dismissible: true,
        pauseOnHover: true,
    })
}

const router = useRouter()

const userStore = useUserStore()

const user = ref('')
const password = ref('')

const signIn = async () => {
	try {
		showLoading.value = true
		await userStore.signIn(user.value, password.value)
		router.push({ name: 'home' })
	} catch (error) {
		triggerToast('Something went wrong!')
	} finally {
		showLoading.value = false
	}
}

const signUp = () => {
	router.push({ name: 'signup' })
}
</script>

<template>
	<main class="flex justify-center">
		<div class="mt-20 sm:w-full sm:max-w-sm">

			<form @submit.prevent="signIn">
				<div class="mb-4">
					<label for="email" class="block my-2 text-sm font-medium leading-6 text-gray-900">Email address</label>
					<input type="email" id="email" v-model="user" placeholder="Email"
						class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
				</div>
				<div class="mb-4">
					<label for="password" class="block text-sm font-medium leading-6 my-2 text-gray-900">Password</label>
					<input type="password" id="password" v-model="password" placeholder="Password"
						class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm shadow-outline focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
				</div>
				<ButtonComponent type="submit"
					class="ml-0 w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-500 focus:outline-none">
					Sign In
				</ButtonComponent>
				<div v-if="userStore.error" class="text-red-500 text-sm mt-2">
					{{ userStore.error.message }}
				</div>
			</form>

			<SignUpPrompt @click="signUp" />
			<SignInGoogleBtnComponent class="mx-auto my-5"/>
		</div>
	</main>
</template>
