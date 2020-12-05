<template>
  <div id="app">
    <navigator></navigator>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator'
import Footer from '@/components/Footer'
import NavBox from '@/components/NavBox'

export default {
  name: 'App',
  components: {
    Navigator,
    Footer,
    NavBox
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
