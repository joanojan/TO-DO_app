<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
    <section class="mb:w-60 bg-gray-300 shadow-2xl rounded-xl max-w-sm  mx-auto">
        <h1 class="dark:text-black text-center p-2 font-bold text-2xl my-10">Welcome to your Tasks App</h1>
        <router-link to="/tasks" class="flex pb-2 justify-center">
            <button-component class="bg-black">Go to your Tasks</button-component>
        </router-link>
    </section>
</template>