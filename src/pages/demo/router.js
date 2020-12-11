const loadComponent = page => {
  return () => import(`@/${page}`);
};
// 加载混合器
const extendMixin = (instance, ...mixins) => {
  instance.mixins = instance.mixins ? instance.mixins.concat(mixins) : mixins;
  return instance;
};
export default {
  component: loadComponent('entry/demo'),
  children: [
    {
      path: '/',
      name: 'home',
      component: extendMixin(
        loadComponent('pages/demo/home')
      ) /* webpackChunkName: "home" */,
      meta: {
        name: '首页'
      }
    }
  ]
};
