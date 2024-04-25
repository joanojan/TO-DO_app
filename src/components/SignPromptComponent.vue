<script setup>
const props = defineProps({
    signIn: Boolean,
})

const clickAction = props.signIn? 'signin' : 'signup'

</script>

<template>
    <div class="mt-10 flex justify-center items-center justify-center h-10 bg-white dark:bg-slate-900 p-3 rounded-md">
        <p v-if="!signIn" class="text-xl dark:text-white font-bold text-xl">Don't have an account?</p>
        <p v-if="signIn" class="text-xl dark:text-white font-bold text-xl">Already have an account?</p>
        <button 
            class="w-28 font-bold text-xl ml-2 focus:outline-none hover:bg-slate-400 rounded-md
                dark:text-white bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-500"
            @click="$emit(clickAction)">
            {{ signIn? 'Sign In' : 'Sign Up'}}
        </button>
    </div>
</template>