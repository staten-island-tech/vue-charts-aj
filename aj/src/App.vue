<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">

      <nav> 
        <div class = 'link'>
        <RouterLink id = "navigate" to="/">Home</RouterLink>
        <RouterLink id = "navigate" to="/about">Bar Chart</RouterLink>
        <RouterLink id = "navigate" to="/pie">Pie Chart</RouterLink>
      </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper {
  justify-content: center;
  text-align: center;
}
#navigate {
  padding-left: 30px;
  padding-right:30px;
}
</style>
