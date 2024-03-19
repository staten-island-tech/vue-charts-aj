
<template>
  <div>
    <h1> Bar Chart</h1>
<BarChart :poke = "poke"> </BarChart>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import BarChart from "@/components/BarChart.vue";
const props = defineProps({
  poke: Object
});
</script>

<style scoped>

</style>
 