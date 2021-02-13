<template>
  
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Election Results</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(result, index) in $store.state.result"
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
                
                
                <strong> {{result.score}} voice</strong>
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
</template>
<script>
export default {

}
</script>

<style>

</style>