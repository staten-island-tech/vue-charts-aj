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
  <Bar :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { ref } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)



export default {
 
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true

     
    },
    chartOptions: {
      type: Object,
      required: true
    }
  }
  
}
</script>