<!-- <template>
  <div>

  </div>
</template>

<script setup>
import {ref, onBeforeMounted} from 'vue'
const pokemon = ref('')
async function getPokemon () { 
  let rest = await fetch ("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
  let data = await rest.json();
  pokemon.value = data;
}
onBeforeMounted(() => {
  getPokemon();
})
</script>

<style scoped>

</style> -->

<template>
  <Bar :data="data" :options="options" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          }
        ]
      }
    }
  }
}
</script>