<template>
<v-container>
  <v-app-bar app
    extended
    extension-height="70"
    color="#FAFAFA"

  >
      <div class="logo">
        <router-link to="/">
        <v-img class="logo1" src="@/assets/cat.png"></v-img>
        </router-link>
      </div>
      <v-spacer></v-spacer>
    <!-- Icone -->
      <div class="mt-5">
        
      
        <v-btn text>
         <span>Vote</span>
         <font-awesome-icon :icon="['fas', 'vote-yea']" size="2x" color="black"  ></font-awesome-icon>
       </v-btn>
       <v-btn text>
         <span>Results</span>
         <font-awesome-icon :icon="['fas', 'poll']" size="2x" color="black"  ></font-awesome-icon>
       </v-btn>
      
      </div>

  
  </v-app-bar>

  
</v-container>
</template>

<script>
export default {
  name:'Navbar',
  data(){
    return{
      drawer:false
    }
  }
}
</script>

<style scoped>
  .logo{
  margin-top:70px;
  }
  .logo1{
  height:85px ;
  }

  

</style>