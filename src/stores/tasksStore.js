import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks } from '@/api/tasksApi'

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

  return {
    // State
    tasks,
    isLoading,
    // Getters
    // Actions
    fetchTasks
  }
})
