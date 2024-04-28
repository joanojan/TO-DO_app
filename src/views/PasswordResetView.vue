<!--TODO: pasword reset supabase feature-->
<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'

const email = ref(undefined)
</script>

<template>
    <div class="flex justify-center">
        <form @submit.prevent="sendEmailForRecoveringPassword(email)" class="bg-white p-4 dark:bg-slate-800 rounded-md">
            <label for="email"
                class="flex justify-between dark:text-white block text-sm font-medium leading-6 my-2 text-gray-900">
                Email
            </label>
            <input type="email" id="email" v-model="email" placeholder="Email"
                class="dark:caret-white dark:bg-slate-700 dark:paceholder-white form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
            <button-component type="submit"
                class="ml-0 w-full bg-slate-500 text-white rounded-md py-2 px-4 hover:bg-slate-600 focus:outline-none">
                Submit
            </button-component>
        </form>
    </div>
</template>