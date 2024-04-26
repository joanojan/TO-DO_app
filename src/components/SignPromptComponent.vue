<script setup>
const props = defineProps({
    signIn: Boolean,
})

const clickAction = props.signIn? 'signin' : 'signup'

</script>

<template>
    <div class="mt-10 flex justify-evenly items-center justify-center h-10 bg-white dark:bg-slate-900 p-3 rounded-md">
        <p v-if="!signIn" class="md:text-lg dark:text-white font-bold">Don't have an account?</p>
        <p v-if="signIn" class="md:text-lg dark:text-white font-bold">Already have an account?</p>
        <button 
            class="w-20 font-bold md:text-lg focus:outline-none hover:bg-slate-300 rounded-md
                dark:text-white bg-slate-400"
            @click="$emit(clickAction)">
            {{ signIn? 'Sign In' : 'Sign Up'}}
        </button>
    </div>
</template>