<template>
  <div class="felx">
<HomePage v-for="edu in edus" :key="edu" :edu="edu"/>
</div>
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
<style scoped>
.felx {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
}
</style>


