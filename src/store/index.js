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
    
        payload.score =  payload.score + 1;
        console.log(this.state.election_result);
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