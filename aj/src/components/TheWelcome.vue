<template>
    <div class="card">
      <h2>{{ poke.incident_type }}</h2>
      <img :src="poke.location" alt=""/>
      <h3>{{ poke.borough }}</h3>
  
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
   poke: Object,
  });
  </script>
  <style scoped>
  
  </style> 