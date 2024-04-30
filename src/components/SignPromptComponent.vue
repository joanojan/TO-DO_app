<script setup>
const props = defineProps({
    signIn: Boolean,
})

const clickAction = props.signIn? 'signin' : 'signup'

</script>

<template>
    <div class="sm:mt-10 flex justify-evenly items-center justify-center h-8 bg-white dark:bg-slate-900 p-2 rounded">
        <p v-if="!signIn" class="md:text-lg text-sm dark:text-white font-bold">Don't have an account?</p>
        <p v-if="signIn" class="md:text-lg dark:text-white font-bold">Already have an account?</p>
        <button 
            class="flex justify-center w-16 md:w-20 ml-4 text-sm focus:outline-none hover:bg-slate-300 rounded-md
                dark:text-white bg-slate-400"
            @click="$emit(clickAction)">
            {{ signIn? 'Sign In' : 'Sign Up'}}
        </button>
    </div>
</template>