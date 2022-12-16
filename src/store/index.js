import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "Hello Vuex",
    id: "False"
  },
  getters: {
  },
  mutations: {
    setState: function(state, id){
      state.id = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
