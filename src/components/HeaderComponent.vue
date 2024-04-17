<script setup>
import { useUserStore } from '@/stores/userStore'
import LogoComponent from '@/components/LogoComponent.vue';
import UserComponent from '@/components/UserComponent.vue';
import { ref, watch } from 'vue'

const userStore = useUserStore()

const user = ref(userStore.user)

watch(() => userStore.user, (newValue) => {
  user.value = newValue
})
</script>

<template>
	<header class="p-6 bg-white shadow-md">
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-bold text-center mb-4">
				TO_DO <span class="text-xs text-gray-500">by J[Vi_Va}</span>
			</h1>
			<div class="flex" v-show="$route.path !== '/signin' && $route.path !== '/signup'">
				<user-component v-if="user" />
			</div>
		</div>
		<nav class="flex items-center justify-between">
			<LogoComponent />
		</nav>
	</header>
</template>