<template>
  <v-app  >
    <Navbar/>
    <v-main class="maincolor">
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
// Nav bar mmenu importation 
import Navbar from '@/components/Navbar'
export default {
  name: 'App',

  components:{
    Navbar
  },
}
</script>
<style scoped>
.maincolor{
  background-color:#F5F5F5;
}
</style>
