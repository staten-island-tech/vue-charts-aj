<!-- 
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
</script> -->
<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'Amount of Incidents Per Borough',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' , 'April', 'May'],
        datasets: [ {  label: 'Incidents', data: [40, 20, 12,2,1] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>