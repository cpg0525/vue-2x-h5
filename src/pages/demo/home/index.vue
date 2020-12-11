<template>
  <div class="home">
    <button @click="req">测试请求</button>
    <p v-if="res">{{res}}</p>
    <button @click="add">累加器</button>
    <p v-if="count">{{count}}</p>
  </div>
</template>
<script>
import models, {ns} from './model';
import { mapState } from 'vuex';
import { testApi } from '@/api/demo/home';
export default {
  name: 'home',
  data() {
    return {
      res: ''
    };
  },
  computed: {
    ...mapState(ns, ['count'])
  },
  methods: {
    req() {
      testApi({ info: '请求的数据' }).then((res) => {
        this.res = res;
      });
    },
    add() {
      let count = this.count;
      count++;
      models.setCount(count);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
