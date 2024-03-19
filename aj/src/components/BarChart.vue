
<!-- <template>
  <div>
<:chartData = "chartData" />
  </div>
</template>
 -->
<!-- 
<script setup>

</script>

<style scoped>

</style> -->
<template>
  <div>
    <h2>Bar Chart</h2>
    <Bar ></Bar>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  poke: Object
});

const chartData = {
  labels: [],
  datasets: [
    {
      label: 'Occurrences',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: []
    }
  ]
};



</script>

<style scoped>

</style>
