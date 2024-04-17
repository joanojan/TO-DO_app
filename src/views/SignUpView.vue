<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import ButtonComponent from "@/components/ButtonComponent.vue"

const userStore = useUserStore()

const form = ref({
    email: "",
    password: "",
});

const handleSubmit = async () => {
    try {
        await userStore.signUp(form.value.email, form.value.password)
        alert("Please check your email to activate your account")
    } catch (error) {
        alert('signUp error --> ', error.message);
    }
}
</script>

<template>
    <main class="flex justify-center">
        <div class="mt-40 sm:w-full sm:max-w-sm">

            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="email" class="block my-2 text-sm font-medium leading-6 text-gray-900">Email
                        address</label>
                    <input type="email" id="email" v-model="form.email" placeholder="Email"
                        class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
                </div>
                <div class="mb-4">
                    <label for="password"
                        class="block text-sm font-medium leading-6 my-2 text-gray-900">Password</label>
                    <input type="password" id="password" v-model="form.password" placeholder="Password"
                        class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm shadow-outline focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <ButtonComponent type="submit"
                    class="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-500 focus:outline-none">
                    Sign Up
                </ButtonComponent>
            </form>
        </div>
    </main>


    <!-- <section class="container mx-auto px-4">
        <form id="signup" @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" v-model="form.email" placeholder="Enter your email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div class="mb-6">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" v-model="form.password" placeholder="Enter your password"
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <button type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign Up
            </button>
        </form>
    </section> -->
</template>