<script setup>
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()

const tasks = tasksStore.fetchTasks()

</script>
<template>
	<main>
		<h1>Tasks View!</h1>
		<ul>
			<li v-for="task in tasks" :key="task">{{ task }}</li>
		</ul>
	</main>
</template>

<style scoped></style>