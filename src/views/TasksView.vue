<script setup>
import AddTask from '@/components/AddTaskComponent.vue'
import TaskComponent from '@/components/TaskComponent.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()

const { tasks, isLoading } = storeToRefs(tasksStore)

onMounted(async () => {
	if (tasks.value.length) {
		return
	}
	try {
		await tasksStore.fetchTasks()
	} catch (error) {
		console.error(error)
	}
})
</script>

<template>
	<main class="flex-col max-w-screen-sm mx-auto mt-5">
		<div v-if="isLoading">Loading tasks ... </div>
		<section v-else>
			<TaskComponent :completed="false" />
			<TaskComponent :completed="true" />
		</section>
		<add-task class="mx-auto bg-black pl-2" />
	</main>
</template>