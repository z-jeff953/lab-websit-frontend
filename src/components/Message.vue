<template>
 <div class="message">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.message {
    min-width: 900px;
    color: #FFFFFF;
    width: 80vw;
    margin: 0 auto;

    font-family: PingFang SC;
    font-size: 14px;
    line-height: 20px;
    /* 保留空白并且正常换行 */
    /* white-space: pre-wrap; */

    position:relative;
}
</style>
