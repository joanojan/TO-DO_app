<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import LogoComponent from '@/components/LogoComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

const router = useRouter()

const userStore = useUserStore()

const signOut = () => {
	userStore.signOut()
	router.push({ name: 'signin' })
}
</script>

<template>
	<header class="p-6 bg-white shadow-md" >
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-bold text-center mb-4">TO-DO App by J[Vi__Va}</h1>
			<ButtonComponent
				v-show="$route.path !== '/signin' && 
						$route.path !== '/signup'" 
				@click="signOut">Sign-Out
			</ButtonComponent>
		</div>
		<nav class="flex items-center justify-between">
			<LogoComponent />
			<ul class="flex justify-end text-lg">
				<li class="hover:text-blue-500 cursor-pointer px-4">
					<RouterLink class="" to="/">Tasks</RouterLink>
				</li>
				<li class="hover:text-blue-500 cursor-pointer px-4">
					<RouterLink to="/about">About</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>