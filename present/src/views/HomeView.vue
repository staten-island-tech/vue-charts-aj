
<template>
  <h1>Bar Chart</h1>
   <HomeBase v-for="poke in pokemon"
   :key = "poke.location">
</HomeBase>
 </template>
 
 <script setup>
 import {ref, onBeforeMount} from 'vue'
 const pokemon = ref('')
 async function getPokemon () { 
   let rest = await fetch ("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
   let data = await rest.json();
   pokemon.value = data;
   console.log (data)
 }
 onBeforeMount(() => {
   getPokemon();
 })
 import HomeBase from "@/components/HomeBase.vue";
 
 </script>
 
 <style scoped>
 
 </style> 
