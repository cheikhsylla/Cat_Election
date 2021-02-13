import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      test:1,
      
      election_result:[
      ],
      found:null,
      result:null
  },
  mutations: {
    increment (state,payload) {
      
        this.state.election_result.push(payload);
      
        this.state.election_result.forEach((element,index) => {
          if(element.id === payload.id) {
            this.state.election_result[index].score=this.state.election_result[index].score+1;
          }
          
          });
          this.state.found = this.state.election_result.map(item=>{
            return [item.id,item]
          }); // creates array of array
          var maparr = new Map(this.state.found); // create key value pair from array of array
        
          this.state.result = [...maparr.values()];//converting back to array from mapobject
          },
  
      
  },
  actions:{
    increment(context,payload){

      setTimeout(function(){
          context.commit('increment',payload)
      },1500)
    }
  }
})