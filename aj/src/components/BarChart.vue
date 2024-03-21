
<template>
  <bar :data="chartData" :options="chartOptions"></bar>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { Bar } from 'vue-chartjs'

const chartData = ref({
  labels: [],
  datasets: [{
    label: 'Incidents',
    backgroundColor: '#3e95cd',
    data: []
  }]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'category', 
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true
    }
  }
});

onBeforeMount(() => {
 
});
</script>