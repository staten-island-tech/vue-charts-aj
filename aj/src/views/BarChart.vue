<template>
  <main>
    <h1>BAR CHART</h1>
  </main>

</template> 
<script setup>

import { ref, onBeforeMount} from 'vue'
const edu = ref('')
async function getEdu (){
  let rest = await fetch("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
  let data = await rest.json();
  edu.value = data;
  console.log(data)
}

onBeforeMount(() => {
 getEdu();
}) 

import HelloWorld from '@/components/HelloWorld.vue';
</script>

