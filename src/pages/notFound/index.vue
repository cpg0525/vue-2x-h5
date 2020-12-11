<template>
  <div class="not-found">
    <img src="~assets/images/404.png" alt="404" />
    <div class="tip">
      <p>抱歉没有找到与<span style="font-family: 宋体">“</span><em>{{errorRouter}}</em><span style="font-family: 宋体">”</span>相关的页面。
      </p>
      <p>温馨提示：</p>
      <p>请检查地址是否正确。</p>
      <p>请检查 entry & pages 文件夹，是否按照项目demo配置。</p>
      <p>此项目访问项目页面需： 你的项目名称 + 项目配置的路由. 项目示例为<a href="/demo"><mark>localhost:8080/demo</mark></a>即可访问到<mark>pages/demo/index.vue</mark>。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  computed: {
    errorRouter() {
      return location.href;
    }
  }
};
</script>

<style lang='scss' scope>
@import './index';
</style>
