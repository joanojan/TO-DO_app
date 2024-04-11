<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import UserComponent from '@/components/UserComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import AddTask from '@/components/AddTaskComponent.vue'
import EditTaskModalComponent from '@/components/EditTaskModalComponent.vue'

const tasksStore = useTasksStore()

//this is making unecessary calls!
tasksStore.fetchTasks()

const selectedTaskId = ref(null)

const { tasks, isLoading } = storeToRefs(tasksStore)

const openEditModal = (taskId) => {
	selectedTaskId.value = taskId	
}

const closeEditModal = () => {
	selectedTaskId.value = null;
}

const markTaskAsCompleted = (taskId) => {
	tasks.value.markComlpetedTask(taskId)
}

</script>
<template>
	<main class="max-w-screen-sm mx-auto mt-5">
		<header class="flex-col">
			<user-component class="text-xl p-2 bg-gray-500 text-white text-center" />
			<h1 class="text-xl p-2 bg-black my-2 text-center text-white">Your tasks: </h1>
		</header>
		<div v-if="isLoading">Loading tasks ... </div>
		<ul v-else>
			<li v-for="task in tasks" :key="task.id" class="flex justify-between">
				{{ task.title }}
				<div>
					<button-component @click="openEditModal(task.id)">Edit Task</button-component>
					<button-component @click="markTaskAsCompleted(task.id)">Mark as completed</button-component>
					<span class="inline-block w-26 text-left px-2 py-1 m-2" :class="{
						'bg-green-500 text-white': task.is_complete,
						'bg-red-500 text-white': !task.is_complete
					}">
						{{ task.is_complete ? 'Completed' : 'Not Completed' }}
					</span>
				</div>
			</li>
		</ul>
		<EditTaskModalComponent v-if="selectedTaskId" :taskId="selectedTaskId" @close="closeEditModal"/>
		<add-task />
	</main>
</template>