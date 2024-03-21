<!-- <template>
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
} -->
<script>
import Piechart from '../components/PieGraph.vue'

export default {
  name: 'pie',
  components: { PieChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Manhattan', 'Staten Island', 'Brooklyn','Bronx', 'Queens'],
        datasets: [{data: []}]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: ['#89CFF0', '#87CEEB', '#6495ED', '#4682B4', '#000080']
      },
      retrieveddata:false
    }
  },
  async mounted(){
    try {
      const res = await fetch ('https://data.cityofnewyork.us/resource/pasr-j7fb.json')
      let data = await res.json()
      const man = data.filter((incident) => incident.borough === 'Manhattan')
      this.chartData.datasets[0].data.push(man.length)
      const stat = data.filter((incident) => incident.borough === 'Staten Island')
      this.chartData.datasets[0].data.push(stat.length)
      const brook = data.filter((incident) => incident.borough === 'Brooklyn')
      this.chartData.datasets[0].data.push(brook.length)
      const bronx = data.filter((incident) => incident.borough === 'Bronx')
      this.chartData.datasets[0].data.push(bronx.length)
      const queens = data.filter((incident) => incident.borough === 'Queens')
      this.chartData.datasets[0].data.push(queens.length)
      this.loaded = true
      } catch (e) {
        console.error(e)
      }
  }
}
</script>


<style scoped>
.pie {
  justify-content: center;
  margin: auto;
  height: 1000px;
  width: 1000px;
}
</style>