<template>
    <div class="home">
        <!-- Progress for data loading -->
        <div v-if="! dataLoaded" style="text-align: center;">
          <v-progress-circular :size="80" :width="7" indeterminate color="#0169aa" style="padding-bottom: 180px;"></v-progress-circular>
        </div>
        <!--Content page-->
        <div class="header_message">
          <h1>Welcome to the Cat election ,select a suitable cadidate that you prefer.</h1>
        </div>
        <v-row dense>
      
          <v-col
            v-for="(cat, index) in pageOfItems" :key="index"
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
                      <v-btn block color="blue" @click="showAlertAndSendMessage(cat)">
                        <span style="color:white">Vote here</span>
                      </v-btn>  
                    </v-card-actions>   
                </v-card>
          </v-col>
          
        </v-row>
        <div class="text-center">
              <jw-pagination :items="cat_info" @changePage="onChangePage" :pageSize='9'></jw-pagination>
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      data() {
        return {
          cat_info:[],
          pageOfItems: [],
          dataLoaded:false,
          test:[]

        }
      },
      
      mounted() {
        axios 
         .get('http://localhost:8080/data/cats.json')
         .then((response)=>{
            this.cat_info=response.data.images;
             this.dataLoaded = true;       
            })

      },
      methods :{
       
          
        showAlertAndSendMessage : function(cat){

            //Display alert message
            this.$swal({
              position: 'center',
              icon: 'success',
              title: 'Thank you for voting!',
              showConfirmButton: false,
              timer: 1500
              });
            //add score to the cat array if not exist
            if (cat && ! cat.score) cat.score=1;
            // sent information to the store
            this.$store.dispatch('increment',cat);
            
        },


        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
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