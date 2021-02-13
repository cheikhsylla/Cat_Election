<template>
<div class="home">
    <div class="header_message">
      <h1>Welcome to the Cat election ,select a suitable cadidate that you prefer.</h1>
    </div>
    <v-row dense>
   
      <v-col
        v-for="(cat, index) in cat_info" :key="index"
      >
            <v-card
            
              class="mx-auto my-12"
              max-width="374"    
            >
                <v-img
                  height="250"
                  :src="cat.url"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                > 
                </v-img>
                <v-card-actions>
                  <v-btn block color="blue" @click="showAlert(cat)">
                    <span style="color:white">Vote here</span>
                  </v-btn>  
                </v-card-actions>   
            </v-card>
      </v-col>
      
    </v-row>
    <v-pagination v-model="page" :length="6" ></v-pagination>
  </div>
</template>

<script>

    import axios from 'axios'
    export default {
      data() {
        return {
          cat_info: null,
          
          page:1,
        }
      },
      created() {
        this.fetch();
      },
      methods :{
        fetch() {
        axios.get('http://localhost:8080/data/cats.json').then(response=>{
            this.cat_info=response.data.images;        
            })
        },
          
        showAlert : function(cat){

          //Display alert message
          this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Thank you for voting!',
            showConfirmButton: false,
            timer: 1500
            }),
          // send candidate informations to store
            cat.score=0;
           
            this.$store.dispatch('increment',cat)
        }

      }

}
</script>

<style scoped>

      .header_message{
          border-width:2px;
          border-style:solid;
          border-color:black;

      }
      .header_message h1 {
      
          text-align: center;
      }

</style>