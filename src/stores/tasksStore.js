import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks } from '@/api/tasksApi'
import { addTask, editTask } from '@/api/tasksApi'

export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([])
  const isLoading = ref(false)

  // Getters

  // Actions
  async function fetchTasks() {
    try {
      isLoading.value = true
      tasks.value = await fetchAllTasks()
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  async function addNewTask(userId, title) {
      await addTask(userId, title)  
      await fetchTasks()
  }

  async function editATask(newTitle) {
    await editTask(newTitle)
    await fetchTasks()
  }


  return {
    // State
    tasks,
    isLoading,
    // Getters
    // Actions
    fetchTasks,
    addNewTask,
    editATask,
  }
})
