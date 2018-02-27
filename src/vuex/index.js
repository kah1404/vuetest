import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state ={
  name: "norway",
  open: false
};


const store = new Vuex.Store({
  state,
  mutations:{
    change (state, countryId){
      state.name = countryId;
    },
    window (state, isOpen){
      state.open = isOpen;
    }
  }
});

export default store;
