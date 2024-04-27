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

const tasksStore = useTasksStore()

const { tasks } = storeToRefs(tasksStore)

onMounted(async () => {
	if (tasks.value.length) {
		return
	}
	try {
		appStore.displayLoading()
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
			<section class="lg:flex justify-center">
				<TaskComponent :completed="false" />
				<TaskComponent :completed="true" />
			</section>
		</div>
	</main>
</template>