<template>
  <div>
    <h1>Incidents by Borough</h1>
    <BarChart :counts="incidentsByBorough" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import BarChart from "@/components/BarChart.vue";

const incidentsByBorough = ref({});

async function fetchData() {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/pasr-j7fb.json");
    const data = await response.json();

    const counts = {};
    data.forEach(entry => {
      if (entry.borough in counts) {
        counts[entry.borough]++;
      } else {
        counts[entry.borough] = 1;
      }
    });

    incidentsByBorough.value = counts;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onBeforeMount(() => {
  fetchData();
});
</script>
