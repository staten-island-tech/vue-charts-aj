
<template>
  <div class = all>
  <div class = "card">
 <h2>{{ poke.borough }}</h2>
 <h2>{{ poke.incident_type }}</h2>
 <h2>{{ poke.location }}</h2>
  </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
 poke: Object,
 
});
</script>
<style scoped>

.card {
  height: 65%;
    width: 70%;
    background-color:#69a0aa; ;
    border-radius: 5%;
    box-shadow: 10px 5px 5px rgb(70, 72, 73);
    margin: 15px 1px;
  padding: 20px;
}


h2{
background-color: var(--light);
text-align: center;

}

.all { 

  display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-content: center; 
}

:root 
{ 
  --black: #000000;
    --light: #b0a592;
    --dark: #5e3f0b;
    --white: #ffffff;
  --primary: var(--light);
  --secondary:var(--dark);
}
</style>