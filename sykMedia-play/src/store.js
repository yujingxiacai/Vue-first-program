import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    poolitem: {},
  },
  mutations: {
    getState(item) {
      state.poolitem = item;
      console.log(item);
    },
  },
  actions: {

  },
});
