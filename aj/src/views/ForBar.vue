<template>
    <div>
      <h1> Bar Chart</h1>
  <TheWelcome :edu = "edu"> </TheWelcome>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import TheWelcome from "@/components/TheWelcome.vue"
  const props = defineProps({
    edu: Object
  });
  </script>
  
  <style scoped>
  
  </style>