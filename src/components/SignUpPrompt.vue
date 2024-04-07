<template>
    <div class="mt-4 flex items-center justify-center">
      <p class="text-sm text-gray-500">Don't have an account?</p>
      <button class="font-semibold ml-2 focus:outline-none text-indigo-600 hover:text-indigo-500" @click="$emit('signup')">
        Sign Up
      </button>
    </div>
  </template>