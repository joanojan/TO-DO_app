<!--TODO: pasword reset supabase feature-->
<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'

const email = ref(undefined)

</script>

<template>
    <section class="flex">
        <div class="mx-auto">
            <h1 class="text-white font-bold ml-2">Introduce your email</h1>
            <input type="email" id="email" v-model="email" placeholder="Email"
						class="form-input w-full rounded-md border border-gray-300 py-2 px-3 text-sm">
            <button-component @click="sendEmailForRecoveringPassword(email)">Submit</button-component>
        </div>
    </section>
</template>