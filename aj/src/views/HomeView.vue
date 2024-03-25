
<template>
  <h1>Home Page</h1>
  <div class = "flexbox">
   <HomeBase v-for="poke in pokemon"
   :key = "poke.location"
   :poke = "poke">
</HomeBase>
</div>
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
h1 {
  text-align: center;
}

.flexbox {
  display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-content: center; 
  
}
 </style> 
