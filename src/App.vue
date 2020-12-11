<template>
  <div id="app">
    <navigator></navigator>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom'
import Navigator from '@/components/Navigator'

export default {
  name: 'App',
  components: {
    Navigator,
    Bottom
  }
}
</script>

<style>
  #app {
  min-width: 525px;

  font-family: "微软雅黑","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* 去除滚动条 */
    -ms-overflow-style:none;
    scrollbar-width: none;
  }::-webkit-scrollbar{
    display:none
    }
</style>
