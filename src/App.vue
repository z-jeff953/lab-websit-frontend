<template>
  <div id="app">
    <Navigator></Navigator>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from './components/Navigator'

export default {
  name: 'App',
  components: {
    'Navigator': Navigator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
