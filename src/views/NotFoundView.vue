<template>
    <div class="flex-col justify-center text-center">
        <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p class="dark:text-white mb-4 text-2xl text-gray-800 font-bold">Page not found</p>
        <div class="animate-bounce my-2">
            <svg class="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
        </div>
        <router-link to="/tasks" class="bg-white hover:underline text-2xl px-4 py-2">Back to your Tasks</router-link>
    </div>
</template>