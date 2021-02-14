<template>
    <div>
        <v-btn @click="findMaxValue($store.state.election_result)" :disabled="isActive" color="blue" v-show="$store.state.election_result.length>=1"> Click here to See the winner</v-btn>
        <div class="text-center" v-if="displayWinner">
            <span style="color:green " class="congratulation_message">Gongratulation you're the winner !</span>
        </div>
        <v-container>
           <v-row dense>
      
          <v-col
            v-for="winner in theWinner" :key="winner.id"
          >
                <v-card
                
                  class="mx-auto my-12"
                  max-width="374"    
                >
                    <v-img
                      height="250"
                      :src="winner.url"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    > 
                    </v-img>
                    <v-card-actions>
                      <v-btn block color="green">
                        <span style="color:white">GONGRATULATION</span>
                      </v-btn>  
                    </v-card-actions>   
                </v-card>
          </v-col>
          
        </v-row>
        </v-container>
        
    
    </div>
</template>

<script>
    export default {
        name:'whoIsTheWinner',

        data() {
            return {
                highscore:null,
                shareWin:[],
                theWinner:[],
                displayWinner:false,
                isActive: false,

            }
        },
        methods: {
            findMaxValue:function (result){
               this.highscore= result.reduce((prev, current) => (prev.score > current.score) ? prev : current); //returns object
              
                // if two or more candidate share the same result
                result.forEach((element,index) => {
                    if(element.score === this.highscore.score) {
                         this.shareWin=result[index];
                         this.theWinner.push(this.shareWin);
                        
                    }
                })
                this.displayWinner=!this.displayWinner;
                this.isActive=true;
            }
        }
        

    }


</script>

<style scoped>
    

</style>