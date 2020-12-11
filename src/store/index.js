import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  count: 123
};
const mutations = {
  addCount(state, payload) {
    state.count = payload;
  }
};
const actions = {
  setCount({ commit }, params) {
    console.log('root!!');
    commit('addCount', params);
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions
});
