<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useTasksStore } from '@/stores/tasksStore'

const userStore = useUserStore()
const tasksStore = useTasksStore()

const newTask = ref('')

async function addTask() {
    try {
        tasksStore.addNewTask(userStore.user.id, newTask.value)
    } catch (e) {
        alert('error trying to add task --> ', e)
    }
}

</script>
<template>
    <label for="addTask">Add Task</label>
    <input type="text" name="addTask" v-model="newTask" />
    <button-component @click="addTask">Submit</button-component>
</template>