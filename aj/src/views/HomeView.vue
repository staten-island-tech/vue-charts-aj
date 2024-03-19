
<template>
  <h1>Home Page</h1>
   <HomeBase v-for="poke in pokemon"
   :key = "poke.location"
   :poke = "poke">
</HomeBase>
 </template>
 
 <script setup>
 import {ref, onBeforeMount} from 'vue'
 const pokemon = ref('')
 async function getPokemon () { 
  try {
   let rest = await fetch ("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
   let data = await rest.json();
   pokemon.value = data;
   console.log (data)
 } catch (error) {
 console.error ('Error', error) }}
 onBeforeMount(() => {
   getPokemon();
 })
 import HomeBase from "@/components/HomeBase.vue";
 
 </script>
 
 <style scoped>
 
 </style> 
