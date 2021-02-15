import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      election_result:[],
  },
  mutations: {
    increment (state,payload) {
     
 
      if (this.state.election_result.map(el => el.id).includes(payload.id)) {
       
        
        this.state.election_result.forEach((element, index) => {
          if(element.id === payload.id) {
           this.state.election_result[index].score++;
          }
      });
      
      } else {
        this.state.election_result.push(payload);
      }
   
      
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