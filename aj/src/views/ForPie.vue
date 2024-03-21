 <template>
  <h1>Pie</h1>
  <PieChart v-if="loaded" :chartOptions="chartOptions" :chartData="chartData"/>
</template>

<script>
import PieChart from '../components/PieGraph.vue'

export default {
  name: 'pie',
  components: { PieChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Utility-other', 'Utility-Water Main', 'Fire 1st Alarm', 'Fire 2nd Alarm', 'Fire 3rd Alarm', 'Fire 4th Alarm', 'Fire 5th Alarm', 'Structural-Sidewalk Collapse'],
        datasets: [{data: []}]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: ['#C6E6FB', "#617178", '#000080', '#005A9C', '#545AA7', '#7285A5', '#111E6C', '#46B2B4']
      },
      retrieveddata:false
    }
  },
  async mounted(){
    try {
      const res = await fetch ('https://data.cityofnewyork.us/resource/pasr-j7fb.json')
      let data = await res.json()
      const util = data.filter((incident) => incident.incident_type === 'Utility-Other')
      this.chartData.datasets[0].data.push(util.length)
      const utili= data.filter((incident) => incident.incident_type === 'Utility-Water Main')
      this.chartData.datasets[0].data.push(utili.length)
      const first = data.filter((incident) => incident.incident_type === 'Fire-1st Alarm')
      this.chartData.datasets[0].data.push(first.length)
      const sec = data.filter((incident) => incident.incident_type === 'Fire-2nd Alarm')
      this.chartData.datasets[0].data.push(sec.length)
      const third = data.filter((incident) => incident.incident_type === 'Fire-3rd Alarm')
      this.chartData.datasets[0].data.push(third.length)
      const fourth = data.filter((incident) => incident.incident_type === 'Fire-4th Alarm')
      this.chartData.datasets[0].data.push(fourth.length)
      const fifth = data.filter((incident) => incident.incident_type === 'Fire-5th Alarm')
      this.chartData.datasets[0].data.push(fifth.length)
      const struct = data.filter((incident) => incident.borough === 'Structural-Sidewalk Collapse')
      this.chartData.datasets[0].data.push(struct.length)
/*       const trans = data.filter((incident) => incident.borough === 'Transportation')
      this.chartData.datasets[0].data.push(trans.length)
      const admin = data.filter((incident) => incident.borough === 'Administration')
      this.chartData.datasets[0].data.push(admin.length)  */
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