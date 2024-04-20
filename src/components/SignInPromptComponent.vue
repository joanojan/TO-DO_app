<template>
    <div class="mt-4 flex items-center justify-center">
        <p class="text-sm text-gray-500">Already have an account?</p>
        <button class="font-semibold ml-2 focus:outline-none text-indigo-600 hover:text-white hover:bg-indigo-500"
            @click="$emit('signup')">
            Sign In
        </button>
    </div>
</template>