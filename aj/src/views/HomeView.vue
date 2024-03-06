<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { createApp } from 'vue'
import App from '../components/TheWelcome.vue'

createApp(App).mount('#app')
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
