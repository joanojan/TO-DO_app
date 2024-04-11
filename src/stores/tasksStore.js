import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, markAsCompleted, markAsNotCompleted } from '@/api/tasksApi'
import { addTask, editTask, deleteTask } from '@/api/tasksApi'

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

  async function editATask(taskId, newTitle) {
    await editTask(taskId, newTitle)
    await fetchTasks()
  }

  async function markCompletedTask(taskId) {
    await markAsCompleted(taskId)
    await fetchTasks()
  }

  async function markPendingTask(taskId) {
    await markAsNotCompleted(taskId)
    await fetchTasks()
  }

  async function deleteATask(taskId) {
    await deleteTask(taskId)
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
    markCompletedTask,
    markPendingTask,
    deleteATask
  }
})
