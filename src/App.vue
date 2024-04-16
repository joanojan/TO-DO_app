<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'

</script>

<template>
		<header-component v-if="($route.name !== 'signin' && $route.name !== 'signup')"/>
		<router-view />
</template>
 