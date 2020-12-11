<template>
  <div :class="
      `layout${
        (isIOS || '').toUpperCase() === 'IOS' ? ' autoX' : ' h5-padding-top'
      }`
    ">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      isIOS: ''
    };
  }
};
</script>

<style lang='scss'>
@import 'assets/styles/base';
@import 'assets/styles/mixin';
$prefix: layout;
$paddingTop: 0px;

@include responsive();

.#{$prefix} {
  &.h5-padding-top {
    padding-top: $paddingTop;
  }
}
</style>
