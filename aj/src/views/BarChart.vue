<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <h1>BAR CHART</h1>
  </main>
</template> 
<script>
import { bar } from 'vue-chart.js'
import { ref, onBeforeMounted} from 'vue'
const edu = ref('')
async function  getEdu (){
  let rest = await fetch ("https://data.cityofnewyork.us/resource/43nn-pn8j.json")
  let data = await rest.json();
  edu.value = data;
}
onBeforeMounted(() => {
 getEdu();
}) 

import
</script> -->
<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chart.js'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
