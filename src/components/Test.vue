<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>Election Results</v-subheader>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(result, index) in msg"
            :key="index"
          >
            <v-expansion-panel-header>
              <v-row
                align="center"
                class="spacer"
                no-gutters
              >
                <v-col
                  cols="4"
                  sm="2"
                  md="1"
                >
                  <v-avatar
                    size="36px"
                  >
                    <img
                      
                      alt="Avatar"
                      :src="result.url"
                    >
                    
                  </v-avatar>
                </v-col>
                <v-spacer></v-spacer>
                <v-col
                  class="text-no-wrap"
                  cols="5"
                  sm="3"
                >
                             
                  <strong> {{result.score}} voice<strong  v-if=" result.score>=2">s </strong> </strong>
                </v-col>
              </v-row>

                

            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
    <div class="text-center">

    </div>
 </div>
 
</template>

<script>

export default {
    name:'Test',
    props:['msg'],
    data() {
        return {
            test:this.msg
        }
    },

}
</script>

<style>

</style>