<template>
<HomePage v-for="edu in edus" :key="edu" :edu="edu"/>

</template> 
<script setup>

import { ref, onBeforeMount} from 'vue'
const edus = ref("")
async function getEdu (){
  let rest = await fetch("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
  let data = await rest.json();
  edus.value = data;
  console.log(data)
}

onBeforeMount(() => {
 getEdu();
}) 

import HomePage from '@/components/HomePage.vue';


</script>

