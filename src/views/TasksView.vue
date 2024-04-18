<script setup>
import AddTask from '@/components/AddTaskComponent.vue'
import TaskComponent from '@/components/TaskComponent.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasksStore'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';

const toast = useToast()

const triggerToast = (message) => {
    toast.open({
        message: message,
        type: 'error',
        position: 'top',
        duration: 6000,
        dismissible: true,
        pauseOnHover: true,
    })
}

const tasksStore = useTasksStore()

const { tasks, isLoading } = storeToRefs(tasksStore)

onMounted(async () => {
	if (tasks.value.length) {
		return
	}
	try {
		await tasksStore.fetchTasks()
	} catch (error) {
		triggerToast('Error on fetch tasks!')
	}
})
</script>

<template>
	<main class="flex-col mt-5">
		<add-task class="mx-auto bg-black pl-2" />
		<div v-if="isLoading">Loading tasks ... </div>
		<section v-else class="lg:flex">
			<TaskComponent :completed="false" />
			<TaskComponent :completed="true" />
		</section>
	</main>
</template>