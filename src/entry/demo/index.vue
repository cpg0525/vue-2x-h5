<template>
  <div class="demo">
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'demo'
};
</script>
<style lang='scss'>
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(30px);
    opacity: 0;
  }
}
</style>
