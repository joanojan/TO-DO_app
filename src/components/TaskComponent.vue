<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { ref, computed } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import EditTaskModalComponent from '@/components/EditTaskModalComponent.vue'
import { storeToRefs } from 'pinia';

const props = defineProps({
    completed: Boolean
})

const tasksStore = useTasksStore()

//To pass the task id to the Edit task modal
const selectedTaskId = ref(null)
const { loading, tasks } = storeToRefs(tasksStore)

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

const deleteTask = (taskId) => {
    tasksStore.deleteATask(taskId)
}

const filteredTasks = computed(() => {
    return tasks.value.filter(task => task.is_complete === props.completed)
})
</script>
<template>
    <h1 class="p-2 font-bold text-lg" :class="{
        'bg-green-500 text-white': completed,
        'bg-red-500 text-white': !completed
    }">
        {{ completed ? 'Completed tasks' : 'Pending tasks' }}
    </h1>

    <ul>
        <li v-for="task in filteredTasks" :key="task.id">
            <div v-if="loading">Loading ...</div>
            <div v-else class="flex-col border-slate-500 border-2">
                <h3 class="text-xl px-4">
                    {{ task.title }}
                </h3>
                <button-component @click="openEditModal(task.id)">Edit Task</button-component>
                <button-component v-if="!completed" @click="markTaskAsCompleted(task.id)">Mark as
                    completed</button-component>
                <button-component v-if="completed" @click="markTaskAsPending(task.id)">Mark as
                    pending</button-component>
                <button-component @click="deleteTask(task.id)">Delete</button-component>
            </div>
        </li>
    </ul>
    <EditTaskModalComponent v-if="selectedTaskId" :taskId="selectedTaskId" @close="closeEditModal" />
</template>