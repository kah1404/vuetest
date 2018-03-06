import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state ={
  name: "norway",
  open: false,
  count: 1
};


const store = new Vuex.Store({
  state,
  mutations:{
    change (state, countryId){
      state.name = countryId;
    },
    window (state, isOpen){
      state.open = isOpen;
    },
    increase (state){
      state.count++
    },
    resetCount (state, zero){
      state.count = zero;
    }
  }
});

export default store;
