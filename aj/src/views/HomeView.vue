<!-- 
<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { createApp } from 'vue'
import App from '../components/TheWelcome.vue'

createApp(App).mount('#app')
</script>
 -->

 
 <template>
 <h1>Bar Chart</h1>
  <DestCard v-for="poke in pokemon"
  :key = "poke.location">
  </DestCard>
</template>

<script setup>
import {ref, onBeforeMounted} from 'vue'
const pokemon = ref('')
async function getPokemon () { 
  let rest = await fetch ("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
  let data = await rest.json();
  pokemon.value = data;
  console.log (data)
}
onBeforeMounted(() => {
  getPokemon();
})
import DestCard from "@/components/DestCard.vue";

</script>

<style scoped>

</style> 
 

