<template>
  <h1>Pie</h1>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData"/>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, LinearScale } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ChartJS, ArcElement, Tooltip, Legend, Title, LinearScale)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return{

      chartData: {
        labels: ['manhattan', 'queens', 'staten island', 'brooklyn', 'bronx'],
      },
      ChartOptions: {
        responsive: true
      }

    }
  }
}


</script>

<style scoped>

</style>