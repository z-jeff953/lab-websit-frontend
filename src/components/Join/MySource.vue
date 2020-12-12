<template>
  <div class="my-source">
    <div class="pics" :style="{ backgroundImage: 'url(' + picsrc + ')' }"></div>
    <message style="white-space:pre-wrap;">{{ text }}</message>
  </div>
</template>

<script>
import Message from '../Message'
export default {
  name: 'MySource',
  props: {
    picsrc: String,
    text: String
  },
  components: {
    Message
  }
}
</script>

<style scoped>
  .my-source {
    width: 216px;
  }

  .pics {
    width: 142.63px;
    height: 142.63px;
    background-size: contain;
  }

</style>
