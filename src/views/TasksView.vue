<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import UserComponent from '@/components/UserComponent.vue'
import AddTask from '@/components/AddTaskComponent.vue'
import TaskComponent from '@/components/TaskComponent.vue'

const tasksStore = useTasksStore()

//this is making unecessary calls!
tasksStore.fetchTasks()

const { isLoading } = storeToRefs(tasksStore)

</script>
<template>
	<main class="max-w-screen-sm mx-auto mt-5">
		<header class="flex-col">
			<user-component class="text-xl p-2 bg-gray-500 text-white text-center" />
			<h1 class="text-xl p-2 bg-black my-2 text-center text-white">Your tasks: </h1>
		</header>
		<div v-if="isLoading">Loading tasks ... </div>
		<section v-else>
			<TaskComponent :completed="false" />
			<TaskComponent :completed="true" />
		</section>
		<add-task />
	</main>
</template>