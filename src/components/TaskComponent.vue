<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import EditTaskModalComponent from '@/components/EditTaskModalComponent.vue'

const tasksStore = useTasksStore()
const selectedTaskId = ref(null)

const { tasks } = storeToRefs(tasksStore)

const openEditModal = (taskId) => {
	selectedTaskId.value = taskId	
}

const closeEditModal = () => {
	selectedTaskId.value = null;
}

const markTaskAsCompleted = (taskId) => {
	tasksStore.markCompletedTask(taskId)
}

const markTaskAsPending = (taskId) => {
    tasksStore.markPendingTask(taskId)
}

const props = defineProps({
    completed: Boolean,
})
const filteredTasks = tasks.value.filter(task => task.is_complete === props.completed)
</script>
<template>
    <h1 class="p-2 font-bold text-lg"
        :class="{
        'bg-green-500 text-white': completed,
        'bg-red-500 text-white': !completed }">
        {{ completed ? 'Completed tasks' : 'Pending tasks' }}
    </h1>
    <ul>
        <li v-for="task in filteredTasks" :key="task.id">
            <div class="flex-col border-slate-500 border-2">
                <h3 class="text-xl px-4">
                    {{ task.title }}
                </h3>
                <button-component @click="openEditModal(task.id)">Edit Task</button-component>
                <button-component v-if="!completed" @click="markTaskAsCompleted(task.id)">Mark as completed</button-component>
                <button-component v-if="completed" @click="markTaskAsPending(task.id)">Mark as pending</button-component>
            </div>
        </li>
    </ul>
    <EditTaskModalComponent v-if="selectedTaskId" :taskId="selectedTaskId" @close="closeEditModal" />
</template>