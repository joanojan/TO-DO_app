<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'

</script>

<template>
    <section class="flex">
        <div class="mx-auto">
            <h1 class="text-white font-bold ml-2">Introduce your email</h1>
            <input type="email" v-model="email" />
            <button-component @click="sendEmailForRecoveringPassword">Submit</button-component>
        </div>
    </section>
</template>