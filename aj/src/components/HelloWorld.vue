
<template>
  <div class="cards">
<h2>borough: {{  edu.borough }}</h2>
<h2>incident type: {{ edu.incident_type }}</h2>
<h2>location: {{ edu.location }}</h2>
  </div>
</template>

<script setup>
const props = defineProps({
  edu: Object
})


</script>
<style scoped>
.cards{
  align-items: center;
  text-align: center;
  border: 3px solid pink;
  padding:2%;
  margin: 2rem 2rem;
  width: 200px;
  height: 45vh;
}
</style>