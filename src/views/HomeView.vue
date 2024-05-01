<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
</script>

<template>
    <section class="max-w-screen-lg mx-auto">
        <h1 class="flex justify-center dark:text-white font-bold text-2xl my-10">Welcome to your Tasks App</h1>
        <router-link to="/tasks" class="flex justify-center">
            <button-component class="bg-black">Go to your Tasks</button-component>
        </router-link>


    </section>
</template>