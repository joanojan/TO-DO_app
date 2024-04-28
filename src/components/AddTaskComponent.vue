<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useTasksStore } from '@/stores/tasksStore'
import ButtonComponent from './ButtonComponent.vue';
import { useAppStore } from '@/stores/appStore'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import { useToast } from 'vue-toast-notification';

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
const userStore = useUserStore()
const tasksStore = useTasksStore()

const newTask = ref('')

async function addTask() {
  try {
    if (newTask.value.length < 4) {
      triggerToast('Minimum length is 4 letters', 'warning')
    } else {
      appStore.showLoading()
      await tasksStore.addNewTask(userStore.user.id, newTask.value)
      newTask.value = ''
      triggerToast('Added Task!', 'success')
    }
  } catch (error) {
    triggerToast('Error trying to add task', 'error')
    console.log(error)
  } finally {
    appStore.hideLoading()
  }
}
</script>

<template>
  <div class="flex items-center mx-auto my-4 md:max-w-xl max-w-sm black:hover:bg-white shadow-xl">
    <label for="newTask" class="sr-only">Enter new task</label>
    <input type="text" v-model="newTask" id="newTask" placeholder="Enter new task" aria-label="New task input"
      class="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <button-component class="ml-2" @click="addTask">
      Add Task
    </button-component>
  </div>
</template>