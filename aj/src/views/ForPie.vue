 <template>
<div class = "piechart">
  <PieChart v-if="loaded" :chartOptions="chartOptions" :chartData="chartData"/>
</div>
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
        labels: [
        'Utility-other',
         'Utility-Water Main', 
         'Utility-Power Outage',
          'Utility-Water Service Line',
           'Fire 1st Alarm',
            'Fire 2nd Alarm',
             'Fire 3rd Alarm',
              'Fire 4th Alarm',
               'Structural-Sidewalk Collapse',
                'Fire 5th Alarm',
                 'Transportation',
                  'Administration',
                   'Transportation by car',
                    'Transportation by train',
                     'Utility-Gas Low Pressure',
                      'Utility-Gas High Pressure',
                       'Utility-Steam Service Line',
                        'Fire-Explosion',
                         'Structural-Street Collapse',
                          'Structural-Partial Collapse',
                           'Utility-Gas Service Line',
                            'Structural-Collapse',
                             'Law Enforcement-Haz Mat',
                              'Fire-Manhole',
                               'Fire-Sensitive Location', 
                               'Fire-Drill',
                                'Utility-Electric Feeder Cable',
                                 'Structural-Construction Accident',
                                  'Structural-Life Safety Violations',
                                   'Structural-Demolition',
                                    'Fire-10-77'],
        datasets: [{data: []}]
      },
      chartOptions: {
        responsive: true,
        backgroundColor: [
        '#C6E6FB',
         '#005A9C', 
         '#545AA7',
          '#7285A5',
          '#CD5C5C',
          '#B22222',
          '#FA8072',
          '#CA3433',
           '#6C85BD',
           '#B80F0A',
            '#A3CEEF',
             '#004B57',
             '#AED3E3',
             '#BBD2EC',
             '#DFE9F5',
             '#A7AED3',
              '#838ABD',
               '#C5D4EB',
                '#90B1DB',
                '#728C69',
                '#466D1D','#597D35','#607D3B','#C21807', '#710C04','#990F02', '#98BF64', '#354A21', '#76AD83', '#439946', '#670C07'
          ]
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
      const struct = data.filter((incident) => incident.incident_type === 'Structural-Sidewalk Collapse')
      this.chartData.datasets[0].data.push(struct.length)
      const fif = data.filter((incident) => incident.incident_type === 'Fire-5th Alarm')
      this.chartData.datasets[0].data.push(fif.length)
      const trans = data.filter((incident) => incident.incident_type === 'Transportation')
      this.chartData.datasets[0].data.push(trans.length)
      const transp = data.filter((incident) => incident.incident_type === 'Transportation-Car')
      this.chartData.datasets[0].data.push(transp.length)
      const transpo = data.filter((incident) => incident.incident_type === 'Transportation-Train Subway')
      this.chartData.datasets[0].data.push(transpo.length)
      const law = data.filter((incident) => incident.incident_type === 'Law Enforcement-Other')
      this.chartData.datasets[0].data.push(law.length) 
      const man = data.filter((incident) => incident.incident_type === 'Utility-Manhole')
      this.chartData.datasets[0].data.push(man.length) 
      const six = data.filter((incident) => incident.incident_type === 'Fire-6th Alarm')
      this.chartData.datasets[0].data.push(six.length) 
      const coll = data.filter((incident) => incident.incident_type === 'Fire-Collapse')
      this.chartData.datasets[0].data.push(coll.length) 
      const haz = data.filter((incident) => incident.incident_type === 'HazMat-High Carbon Monoxide')
      this.chartData.datasets[0].data.push(haz.length) 
      const sev = data.filter((incident) => incident.incident_type === 'Fire-7th Alarm')
      this.chartData.datasets[0].data.push(sev.length) 
      const low = data.filter((incident) => incident.incident_type === 'Utility-Gas Low Pressure')
      this.chartData.datasets[0].data.push(low.length) 
      const high = data.filter((incident) => incident.incident_type === 'Utility-Gas High Pressure')
      this.chartData.datasets[0].data.push(high.length) 
      const steam = data.filter((incident) => incident.incident_type === 'Utility-Steam Service Line')
      this.chartData.datasets[0].data.push(steam.length) 
      const explo = data.filter((incident) => incident.incident_type === 'Fire-Explosion')
      this.chartData.datasets[0].data.push(explo.length) 
      const street = data.filter((incident) => incident.incident_type === 'Structural-Street Collapse')
      this.chartData.datasets[0].data.push(street.length) 
      const partial = data.filter((incident) => incident.incident_type === 'Structural-Partial Collapse')
      this.chartData.datasets[0].data.push(partial.length) 
      const structcoll = data.filter((incident) => incident.incident_type === 'Utility-Gas Service Line')
      this.chartData.datasets[0].data.push(structcoll.length) 
      const gas = data.filter((incident) => incident.incident_type === 'Structural-Collapse')
      this.chartData.datasets[0].data.push(gas.length) 
      const lawhaz = data.filter((incident) => incident.incident_type === 'Law Enforcement-Haz Mat')
      this.chartData.datasets[0].data.push(lawhaz.length) 
      const manhole = data.filter((incident) => incident.incident_type === 'Fire-Manhole')
      this.chartData.datasets[0].data.push(manhole.length) 
      const sens = data.filter((incident) => incident.incident_type === 'Fire-Sensitive Location')
      this.chartData.datasets[0].data.push(sens.length) 
      const drill = data.filter((incident) => incident.incident_type === 'Fire-Drill')
      this.chartData.datasets[0].data.push(drill.length) 
      const elec = data.filter((incident) => incident.incident_type === 'Utility-Electric Feeder Cable')
      this.chartData.datasets[0].data.push(elec.length) 
      const construct = data.filter((incident) => incident.incident_type === 'Structural-Construction Accident')
      this.chartData.datasets[0].data.push(construct.length) 
      const viol = data.filter((incident) => incident.incident_type === 'Structural-Life Safety Violations')
      this.chartData.datasets[0].data.push(viol.length) 
      const demol = data.filter((incident) => incident.incident_type === 'Structural-Demolition')
      this.chartData.datasets[0].data.push(demol.length) 
      const ten = data.filter((incident) => incident.incident_type === 'Fire-10-77')
      this.chartData.datasets[0].data.push(ten.length) 
      this.loaded = true
      } catch (e) {
        console.error(e)
      }
  }
}
</script>


<style scoped>
.piechart {
  justify-content: center;
  margin: auto;
  height: 1000px;
  width: 1000px;
}
</style>