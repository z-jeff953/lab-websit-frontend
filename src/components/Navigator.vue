<template>
  <div id="navigator">
    <div id="left-nav">
    </div>
    <div id="right-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/join">Join</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigator',
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  #navigator {
    width: 100%;
    height: 100px;
    position: fixed;
  }
</style>