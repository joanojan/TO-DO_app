<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'

const tasksStore = useTasksStore()

tasksStore.fetchTasks()

const { tasks, isLoading } = storeToRefs(tasksStore)
console.log(tasks)

</script>
<template>
	<main>
		<h1>TasksView</h1>
		<div v-if="isLoading">Loading tasks ... </div>
		<ul v-else>
			<li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
		</ul>
	</main>
</template>

<style scoped></style>