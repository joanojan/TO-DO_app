<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { ref, computed } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import EditTaskModalComponent from '@/components/EditTaskModalComponent.vue'
import { storeToRefs } from 'pinia'; import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';

const toast = useToast()

const triggerToast = (message, type) => {
    toast.open({
        message: message,
        type: type,
        position: 'top',
        duration: 6000,
        dismissible: true,
        pauseOnHover: true,
    })
}


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

const markTaskAsCompleted = async (taskId) => {
    try {
        tasksStore.markCompletedTask(taskId)
        triggerToast('Completed task!', 'success')
    } catch (error) {
        triggerToast('Error on Mark as Completed!', 'error')
    }
}

const markTaskAsPending = async (taskId) => {
    try {
        tasksStore.markPendingTask(taskId)
        triggerToast('Pending task!', 'success')
    } catch (error) {
        triggerToast('Error on Mark as Pending!', 'error')
    }
}

const deleteTask = async (taskId) => {
    try {
        await tasksStore.deleteATask(taskId)
        triggerToast('Deleted task!', 'success')
    } catch (error) {
        triggerToast('Error on deleting task!', 'error')
    }
}

const filteredTasks = computed(() => {
    return tasks.value.filter(task => task.is_complete === props.completed)
})
</script>

<template>
    <main class="flex-col m-2 lg:w-1/2">
        <h1 class="p-2 font-bold text-lg select-none" :class="{
            'bg-green-500 text-white': completed,
            'bg-red-500 text-white': !completed
        }">
            {{ completed ? 'Completed tasks' : 'Pending tasks' }}
        </h1>

        <ul>
            <li v-for="task in filteredTasks" :key="task.id"
                class="my-2 flex-col border-slate-500 border-2 dark:text-white dark:bg-slate-700">
                <h3 class="text-xl px-4 font-bold">
                    {{ task.title }}
                </h3>
                <button-component v-if="!completed" @click="openEditModal(task.id)">Edit Task</button-component>
                <button-component v-if="!completed" @click="markTaskAsCompleted(task.id)">Mark as
                    completed</button-component>
                <button-component v-if="completed" @click="markTaskAsPending(task.id)">Mark as
                    pending</button-component>
                <button-component @click="deleteTask(task.id)">Delete</button-component>
            </li>
        </ul>
        <EditTaskModalComponent v-if="selectedTaskId" :taskId="selectedTaskId" @close="closeEditModal" />
    </main>
</template>