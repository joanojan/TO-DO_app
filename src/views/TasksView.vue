<script setup>
import AddTask from '@/components/AddTaskComponent.vue'
import TaskComponent from '@/components/TaskComponent.vue'
import { onMounted } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'

const appStore = useAppStore()

const { showLoading } = storeToRefs(appStore)

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

const { tasks } = storeToRefs(tasksStore)

onMounted(async () => {
	if (tasks.value.length) {
		return
	}
	try {
		showLoading.value = true
		await tasksStore.fetchTasks()
	} catch (error) {
		triggerToast('Error on fetch tasks!')
	} finally {
		showLoading.value = false
	}
})
</script>

<template>
	<main class="flex-col mt-5">
		<add-task class="mx-auto bg-black pl-2" />
		<section class="lg:flex">
			<TaskComponent :completed="false" />
			<TaskComponent :completed="true" />
		</section>
	</main>
</template>