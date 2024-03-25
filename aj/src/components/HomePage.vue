
<template>
  <div class="cards">
<h2 >borough: {{  edu.borough }}</h2>
<h2>incident type: {{ edu.incident_type }}</h2>
<h2>location: {{ edu.location }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  edu: Object,
})


</script>
<style scoped>
h2{
  background-color: pink;
}
.cards{
  background-color: pink;
  align-items: center;
  text-align: center;
  border: 3px solid rgb(182, 100, 100);
  border-radius:5%;
  padding:2%;
  margin: 2rem 2rem;
  width: 200px;
  height: 30vh;
  box-shadow: 10px 5px 5px rgb(172, 54, 113);
  
}

</style>