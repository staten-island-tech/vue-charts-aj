<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="header">
      <nav>
        <RouterLink id = "navigate" to="/bar">Amount of Incidents per Borough</RouterLink>
        <RouterLink id = "navigate" to="/">Data for all incident types</RouterLink>
        <RouterLink id = "navigate" to="/pie">Number of each incident types</RouterLink>

      </nav>
  </header>

  <RouterView />
</template>
<style scoped>
.header{
text-align:center;
}

#navigate{
  padding-left: 30px;
  padding-right:30px
}
</style>



