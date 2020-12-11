import DialogComponent from './dialog.vue';

const DialogPlugin = {
  install(Vue) {
    const Dialog = Vue.component('mDialog', DialogComponent);
    const dlg = new Dialog();
    const vm = dlg.$mount();
    document.querySelector('body').appendChild(vm.$el);

    Vue.prototype.$dialog = {
      /**
       * 吐司提示
       * @param {string} msg - 提示文字
       * @param {object} params - 配置信息
       * @param {number} params.delay - 多少秒后关闭, 默认 3s, 如果为 0 , 则不关闭
       * @param {function} params.callback - 关闭时执行的回调
       * @param {string} params.transition - transition 组件使用的动画效果
       */
      toast(msg, params = {}) {
        if (!msg) return;
        return dlg.toast(msg, params);
      }
    };
  }
};

export default DialogPlugin;
