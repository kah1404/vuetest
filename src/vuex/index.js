import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state ={
  name: "norway",
  cb1: false,
};


const store = new Vuex.Store({
  state,
  mutations:{
    change (state, countryId){
      state.name = countryId;
    },
    checked (state, isChecked){
      state.cb1 = isChecked;
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
