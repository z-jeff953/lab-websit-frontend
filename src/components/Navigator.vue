<template>
  <div id = "navigator">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/join">Join</router-link>
  </div>
</template>

<script>
export default {
  el: '#navigator',
  name: 'Navigator'
}
</script>

<style scoped>
#navigator {
  width: 100%;
  height: 60px;
  position: fixed;
  z-index: 1;
}
</style>
