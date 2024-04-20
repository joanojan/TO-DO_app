import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, markAsCompleted, markAsNotCompleted } from '@/api/tasksApi'
import { addTask, editTask, deleteTask } from '@/api/tasksApi'

export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([])
  const isLoading = ref(false)

  // Actions
  async function fetchTasks() {
    try {
      //aquí no hi anirá. Això va a on crides el fetch.
      isLoading.value = true
      tasks.value = await fetchAllTasks()
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  async function addNewTask(userId, title) {
      const newTask = await addTask(userId, title)  
      tasks.value.push(newTask)
  }

  async function editATask(taskId, newTitle) {
    const updatedTask = await editTask(taskId, newTitle)
    const index = tasks.value.findIndex(t => t.id === updatedTask.id)

    if (index !== -1) {
      tasks.value[index] = updatedTask
    }
  }

  async function markCompletedTask(taskId) {
    const updatedTask = await markAsCompleted(taskId)
    const index = tasks.value.findIndex(t => t.id === updatedTask.id)

    if (index !== -1) {
      tasks.value[index] = updatedTask
    }    
  }

  async function markPendingTask(taskId) {
    const updatedTask = await markAsNotCompleted(taskId)
    const index = tasks.value.findIndex(t => t.id === updatedTask.id)

    if (index !== -1) {
      tasks.value[index] = updatedTask
    }
  }

  async function deleteATask(taskId) {
      await deleteTask(taskId)
      tasks.value = tasks.value.filter(task => task.id !== taskId)
  }
  return {
    // State
    tasks,
    isLoading,
    // Actions
    fetchTasks,
    addNewTask,
    editATask,
    markCompletedTask,
    markPendingTask,
    deleteATask
  }
})
