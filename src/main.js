// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import Dialog from '@/components/common/dialog';
import App from '@/entry';
import store from './store';
import Request from './plugin/request';
import VxRefactor from 'vx-refactor';

Vue.use(Dialog);
Vue.use(Request);

VxRefactor(store);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
