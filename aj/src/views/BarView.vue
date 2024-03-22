<template>
  <div>
    <h1>Incidents by Borough</h1>
    <BarChart v-if="loaded" :chartOptions="chartOptions" :chartData="chartData" />
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import BarChart from "@/components/BarChart.vue";

export default {
  name: 'Amount of Incidents Per Borough',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Brooklyn', 'Queens', 'Staten Island', 'Manhattan', 'Bronx'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: ['#8BD3E6', '#FF6D6A', '#D291BC', '#FFC4C4', '#957DAD']
      }
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://data.cityofnewyork.us/resource/pasr-j7fb.json");
        const data = await response.json();
        const brook = data.filter((each) => each.borough === 'Brooklyn');
        this.chartData.datasets[0].data.push(brook.length);
        const queen = data.filter((each) => each.borough === 'Queens');
        this.chartData.datasets[0].data.push(queen.length);
        const si = data.filter((each) => each.borough === 'Staten Island');
        this.chartData.datasets[0].data.push(si.length);
        const man = data.filter((each) => each.borough === 'Manhattan');
        this.chartData.datasets[0].data.push(man.length);
        const bron = data.filter((each) => each.borough === 'Bronx');
        this.chartData.datasets[0].data.push(bron.length);
        this.loaded = true;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  beforeMount() {
    this.fetchData();
  }
}
</script>