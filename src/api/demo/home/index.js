import Vue from 'vue';

const testApi = data =>
  Vue.prototype.$http({ url: '/api/ninetycent/isExpiry.do', data });

export { testApi };
