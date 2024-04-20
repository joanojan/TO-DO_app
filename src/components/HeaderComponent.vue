<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRoute } from 'vue-router';
import LogoComponent from '@/components/LogoComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import { ref, watch, computed } from 'vue'

const userStore = useUserStore()
const route = useRoute()

const user = ref(userStore.user)

watch(() => userStore.user, (newValue) => {
	user.value = newValue
})

const title = computed(() => {
	if(route.path === '/') return 'Tasks'
	if(route.path === '/about') return 'About'
	if(route.path === '/signin') return 'Sign in'
	if(route.path ==='/signup') return 'Sign up'
	return ''
})
</script>

<template>
	<header class="p-6 bg-white shadow-md">
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-bold text-center mb-4 select-none">
				TO_DO app
			</h1>
			<user-component v-if="user && route.path !== '/signup'" />
		</div>
		<div class="flex items-center justify-between">
			<LogoComponent class="w-80"/>
			<p class="font-bold text-2xl text-center w-80 select-none">{{ title }}</p>
			<p class="font-bold w-80 text-right select-none">&copy; 2024 Joan-vv with &#9829;</p>
		</div>
	</header>
</template>