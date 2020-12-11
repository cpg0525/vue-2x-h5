<template>
  <transition :name="transition">
    <div class="m-dialog" v-if="show">
      <div class="toast" v-if="type === 'toast'">{{ msg }}</div>
      <div class="mask" :data-type="type"></div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      transition: 'fade',
      type: 'toast',
      show: false
    };
  },
  watch: {
    show(val) {
      if (val) {
        // document.body.style.overflow = 'hidden';
        // document.documentElement.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    }
  },
  methods: {
    /**
     * 吐司提示
     * @param {string} msg - 提示文字
     * @param {object} params - 配置信息
     * @param {number} params.delay - 多少秒后关闭, 默认 3s, 如果为 0 , 则不关闭
     * @param {function} params.callback - 关闭时执行的回调
     */
    toast(msg, params = {}) {
      this.msg = msg;
      this.type = 'toast';
      this.transition = 'toast';
      let delay = 3000;
      if (typeof params.delay === 'number') {
        delay = params.delay * 1000;
      }
      this.show = true;

      setTimeout(() => {
        if (typeof params.callback === 'function') {
          params.callback();
        }
        this.show = false;
      }, delay || 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-dialog {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .toast {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background-color: rgba(68, 68, 68, 0.7);
    z-index: 2;
  }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 200%;
    background-color: #000;
    opacity: 0.3;
    z-index: 1;
    &[data-type='toast'] {
      opacity: 0.01;
    }
  }
}
</style>
