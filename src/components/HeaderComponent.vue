<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRoute } from 'vue-router'
import LogoComponent from '@/components/LogoComponent.vue'
import UserComponent from '@/components/UserComponent.vue'
import { computed } from 'vue'
import DarkModeToggleButton from './DarkModeToggleButton.vue'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()


const route = useRoute()

const { user } = storeToRefs(userStore)

const title = computed(() => {
	if (route.path === '/') return 'Tasks'
	if (route.path === '/about') return 'About'
	if (route.path === '/signin') return 'Sign in'
	if (route.path === '/signup') return 'Sign up'
	if (route.path === '/password-reset') return 'Password reset'
	return ''
})
</script>

<template>
	<header
		class="max-w-screen-xl p-6 bg-white shadow-xl dark:bg-slate-800 dark:text-white mx-auto mb-4">
		<div class="flex items-center justify-between mb-4">
			<h1 class="text-xl font-bold text-center select-none">
				TO_DO app
			</h1>
			<user-component v-if="user && route.path !== '/signup'" />
		</div>
		<div class="flex items-center">
			<logo-component class="w-1/3" />
			<p class="font-bold md:text-2xl text-center w-1/3 select-none">{{ title }}</p>
			<dark-mode-toggle-button class="flex w-1/3 justify-end" />
		</div>
	</header>
</template>
