<script setup>
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore()
const user = userStore.user
</script>
<template>
    <p>{{ user.email }}</p>
</template>