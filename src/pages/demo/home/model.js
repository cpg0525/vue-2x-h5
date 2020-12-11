import { connect } from 'vx-refactor';

export const ns = 'home';
const state = {
  count: 0
};

const mutations = {
  addCount(state, payload) {
    state.count = payload;
  }
};

const actions = {
  setCount({ commit }, params) {
    commit('addCount', params);
  }
};

const getters = {
  getCount(state) {
    return state.count;
  }
};

export default connect({
  ns,
  state,
  mutations,
  actions,
  getters
});
