<script setup>
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useAppStore } from '@/stores/appStore'
import { useRouter } from 'vue-router'
import ButtonComponent from '@/components/ButtonComponent.vue'
import SignPromptComponent from '@/components/SignPromptComponent.vue'
import SignInProviderBtnComponent from '@/components/SignInProviderBtnComponent.vue'

const toast = useToast()

const triggerToast = (message, type) => {
	toast.open({
		message: message,
		type: type,
		position: 'bottom-right',
		duration: 3000,
		dismissible: true,
		pauseOnHover: true,
	})
}

const appStore = useAppStore()

const router = useRouter()

const userStore = useUserStore()

const user = ref('')

const password = ref('')

const signIn = async () => {
	try {
		appStore.showLoading()
		await userStore.signIn(user.value, password.value)
		triggerToast('Sign in successfully', 'success')
		router.push({ name: 'home' })
	} catch (error) {
		triggerToast('Something went wrong!')
		triggerToast('Sing in failed', 'error')
	} finally {
		appStore.hideLoading()
	}
}

const signUp = () => {
	router.push({ name: 'signup' })
}

const passwordReset = () => {
	router.push({ name: 'password-reset' })
}
</script>

<template>
	<main class="mt-4 flex justify-center">
		<div class="max-w-sm">
			<form @submit.prevent="signIn" class="bg-white p-4 dark:bg-slate-800 rounded-md">
				<div class="mb-4">
					<label for="email" class="dark:text-white block text-sm font-medium leading-6 my-2 text-gray-900">
						Email address
					</label>
					<input type="email" id="email" v-model="user" placeholder="Email"
						class="dark:caret-white dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
					<label for="password" class="flex justify-between dark:text-white block text-sm font-medium leading-6 my-2 text-gray-900">
						Password <span @click="passwordReset" class="text-sm font-medium hover:text-yellow-300">Forgot
							password?</span>
					</label>
					<input type="password" id="password" v-model="password" placeholder="Password"
						class="dark:caret-white dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
				</div>
				<button-component type="submit" class="w-full mx-auto">
					Sign In
				</button-component>
			</form>

			<sign-prompt-component @click="signUp" />
			<sign-in-provider-btn-component provider="google" class="mx-auto sm:my-6" />
			<sign-in-provider-btn-component provider="github" class="mx-auto sm:my-6" />
		</div>
	</main>
</template>
