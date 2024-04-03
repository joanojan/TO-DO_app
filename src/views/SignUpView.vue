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
        alert(error.message);
    }
}
</script>

<template>
    <form id="signup" @submit.prevent="handleSubmit">
        <h1>Sign Up</h1>
        <label>Email <input v-model="form.email" type="email" /></label>
        <label>Password <input v-model="form.password" type="password" /></label>
        <button>Sign Up</button>
    </form>
</template>