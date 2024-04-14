<script setup>
import { useUserStore } from '@/stores/userStore';
import { ref } from 'vue'

const userStore = useUserStore()

const user = ref(userStore.user)

console.log(user.value.email)

</script>

<template>
  <div>
    <h1 class="text-3xl">Thanks for registering!</h1>
    <p>
      Please confirm your email for finishing registering
      <!-- To do: link to email -->  {{ user.email }}
    </p>
  </div>
</template>