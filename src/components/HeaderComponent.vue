<script setup>
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const signOut = () => {
	userStore.signOut()
	router.push({ name: 'signin' })
}
</script>

<template>
    <button v-show="$route.path !== '/signin'" @click="signOut">Sign Out</button>
    <div class="wrapper">
			<nav>				
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
</template>