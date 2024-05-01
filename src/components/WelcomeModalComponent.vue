<script setup>
import { ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const isOpen = ref(true)

const toggle = () => {
    isOpen.value = !isOpen.value
}
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 flex justify-center items-center z-50">
        <div @click="toggle" class="absolute bg-black opacity-70 inset-0 z-0"></div>
        <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div>
                <div class="text-center p-3 flex-auto justify-center leading-6">
                    <h2 class="text-2xl font-bold py-4">Welcome to your Tasks App!</h2>
                </div>
                <div class="p-3 mt-2 text-center space-x-4 md:block">
                    <ButtonComponent @click="toggle">
                        Lets Go!
                    </ButtonComponent>
                </div>
            </div>
        </div>
    </div>
</template>
