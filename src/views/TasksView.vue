<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import UserComponent from '@/components/UserComponent.vue'
import AddTask from '@/components/AddTask.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'
import EditTaskComponent from '@/components/EditTaskComponent.vue'

const tasksStore = useTasksStore()

tasksStore.fetchTasks()

const { tasks, isLoading } = storeToRefs(tasksStore)

const editMode = ref(false)

async function edit() {
	editMode.value = true
}

</script>
<template>
	<main>
		<header class="flex-col">
			<user-component class="text-xl p-2 bg-gray-500 text-white text-center" />
			<h1 class="text-xl p-2 bg-black my-2 text-center text-white">Your tasks: </h1>
		</header>
		<div v-if="isLoading">Loading tasks ... </div>
		<ul v-else>
			<li v-for="task in tasks" :key="task.id" class="flex justify-between">
				{{ task.title }}
				<div>
					<EditTaskComponent v-if="editMode" :id="task.id"/>
					<button-component @click="edit">Edit Task</button-component>
					<span class="inline-block w-26 text-left px-2 py-1 m-2" :class="{
						'bg-green-500 text-white': task.is_complete,
						'bg-red-500 text-white': !task.is_complete
					}">
						{{ task.is_complete ? 'Completed' : 'Not Completed' }}
					</span>
				</div>
			</li>
		</ul>
		<add-task />
	</main>
</template>