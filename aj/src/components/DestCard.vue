<!--  <template>
  <div class="card">
    <h2>{{ poke.incident_type }}</h2>
    <img :src="poke.location" alt=""/>
    <h3>{{ poke.borough }}</h3>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
 poke: Object,
});
</script>
<style scoped>

</style>  -->
<template>
  <div>

  </div>
</template>

<script>
import {Bar} from 'vue-chartjs'
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
      },
      chartOptions: {
        responsive: true
      },
      methods: { 
        async fetchData(){ 
          let rest = await fetch ("https://data.cityofnewyork.us/resource/pasr-j7fb.json")
          let data = await rest.json();
  pokemon.value = data;}
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>