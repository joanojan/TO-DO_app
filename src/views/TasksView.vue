<script setup>
import AddTask from '@/components/AddTaskComponent.vue'
import TaskComponent from '@/components/TaskComponent.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/appStore'
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()

const { tasks } = storeToRefs(tasksStore)

const toast = useToast()

const triggerToast = (message, type) => {
	toast.open({
		message: message,
        type: type,
        position: 'bottom-right',
        duration: 3000,
        dismissible: true,
        pauseOnHover: true,
    })
}

const appStore = useAppStore()

onMounted(async () => {
	if (tasks.value.length) {
		return
	}
	try {
		appStore.showLoading()
		await tasksStore.fetchTasks()
		triggerToast('Tasks loaded successfully', 'info')
	} catch (error) {
		triggerToast('Error on fetch tasks!', 'error')
	} finally {
		appStore.hideLoading()
	}
})
</script>

<template>
	<main class="flex-col mt-5">
		<add-task class="shadow-xl rounded pl-2 dark:bg-slate-500" />
		<div class="">
			<section class="md:flex justify-center">
				<TaskComponent :completed="false" />
				<TaskComponent :completed="true" />
			</section>
		</div>
	</main>
</template>