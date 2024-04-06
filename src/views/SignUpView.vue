<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const router = useRouter()

const userStore = useUserStore()

const form = ref({
    email: "",
    password: "",
});

const handleSubmit = async () => {
    try {
        await userStore.signUp(form.value.email, form.value.password)

        router.push({
            name: "confirmEmail",
        });
    } catch (error) {
        alert('signUp error --> ', error.message);
    }
}
</script>

<template>
    <section class="container mx-auto px-4">
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
    </section>
</template>

<!-- <h1>Sign Up for the TO-DO app by J[v_v]</h1>
    <form id="signup" @submit.prevent="handleSubmit">
        <label>Email <input v-model="form.email" type="email" /></label>
        <label>Password <input v-model="form.password" type="password" /></label>
    </form> -->