 <template>
  <div>
    <h1>Incidents by Borough</h1>
    <BarChart v-if="loaded" :chartOptions="chartOptions" :chartData="chartData" />
  </div>
</template>

<script >
import { ref, onBeforeMount } from 'vue'
import BarChart from "@/components/BarChart.vue";

const incidentsByBorough = ref({});

export default {
  name: 'Amount of Incidents Per Borough',
  components: { BarChart },
  data() {
    return {
    loaded: false,
      chartData: {
        labels: [ 'Brooklyn', 'Queens', 'Staten Island' , 'Manhattan', 'Bronx'],
        datasets: [ {  data: [] } ]
      },
      chartOptions: {
        responsive: true,
backgroundColor: ['#8BD3E6', '#FF6D6A', '#D291BC', '#FFC4C4', ' #957DAD']
      },
      retrievedata: false
    }
  }
}


async function fetchData() {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/pasr-j7fb.json");
    let data = await response.json();
    const brook = data.filter((each) => each.borough === "Brooklyn")
    this.chartData.datasets[0].data.push(brook.length)
/* 
    const counts = {};
    data.forEach(el => {
      if (el.borough in counts) {
        counts[el.borough]++;
      } else {
        counts[el.borough] = 1;
      }
    });

    incidentsByBorough.value = counts; */
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

onBeforeMount(() => {
  fetchData();
});
</script>
 