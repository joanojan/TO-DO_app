<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useTasksStore } from '@/stores/tasksStore'
import ButtonComponent from './ButtonComponent.vue';

const userStore = useUserStore()
const tasksStore = useTasksStore()

const newTask = ref('')

async function addTask() {
    try {
        if(newTask.value.length < 4){
          alert('Minimum length is 4 letters')
        } else {
          await tasksStore.addNewTask(userStore.user.id, newTask.value)
          newTask.value = ''
          alert('success on adding the task!')
        }
    } catch (error) {
        alert('error trying to add task --> ', error)
    }
}

</script>
<!-- <template>
    <label for="addTask">Add Task</label>
    <input type="text" name="addTask" v-model="newTask"
        class="" />
    <button-component @click="addTask">Submit</button-component>
</template> -->

<template>
    <div class="flex items-center mb-4 mt-4 max-w-xl">
      <label for="newTask" class="sr-only">Enter new task</label>
      <input
        type="text"
        v-model="newTask"
        id="newTask"
        placeholder="Enter new task"
        aria-label="New task input"
        class="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ButtonComponent class="ml-2" @click="addTask">
        Add Task
      </ButtonComponent>
    </div>
  </template>