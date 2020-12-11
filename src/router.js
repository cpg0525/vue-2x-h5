import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const route = [];
(r => {
  r.keys().forEach(key => {
    const m = r(key).default;
    m.path = m.path || `/${key.split('/')[2]}`;
    route.push(m);
  });
})(require.context('.', true, /\/pages\/([^/])+\/router.js$/));

const router = new VueRouter({
  mode: 'history',
  routes: [...route, { path: '*', redirect: { path: '/notFound' } }]
});

router.beforeEach((to, from, next) => {
  const path = to.fullPath;
  if (/^\/.+\?debug$/.test(path)) {
    const src = '//cdn.jsdelivr.net/npm/eruda';
    document.write(`<script src='${src}'></script>`);
    document.write(`<script>eruda.init();</script>`);
  }
  if (to.meta && to.meta.name) {
    document.title = to.meta.name;
    next();
  }
  next();
});

window.$router = router;

export default router;
