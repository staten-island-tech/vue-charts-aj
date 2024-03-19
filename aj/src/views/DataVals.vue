<template>
  <div>
    <h1> Pie Chart</h1>
<WelcomeItem :edu = "edu"> </WelcomeItem>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import WelcomeItem from "@/components/WelcomeItem.vue"
const props = defineProps({
  edu: Object
});
</script>

<style scoped>

</style>