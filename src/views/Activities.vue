<template>
  <div class="activities">
    <div class="activities-top"></div>
    <div class="activities-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'Activities',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .activities {
    height: 2000px;
    width: 100%;

    background-color: #252B42;
  }

  .activities-top {
    height: 1000px;
    background-image: url('../assets/backgrounds/background_top.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
  }

  .activities-bottom {
    height: 1000px;
    background-image: url('../assets/backgrounds/background_middle.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
  }
</style>
