<template>
  <h1>Pie</h1>
  <Pie :options="chartOptions" :data="chartData"/>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  props: {
    chartData: {
      type: Object,
      requires: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      retrievedData: false
    }
  }
}



</script>
<style scoped>

</style>