<template>
  <div class="column-title">
    <div class="line"></div>
    <div class="words">
      <div class="en-title">{{ enTitle }}</div>
      <div class="cn-title">{{ cnTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnTitle',
  props: {
    enTitle: {
      type: String,
      defult: 'enTitle'
    },
    cnTitle: {
      type: String,
      defult: 'cnTitle'
    }
  }
}
</script>

<style scoped>
  .column-title {
    min-width: 800px;
    width: 80vw;

    margin: 0 auto;
    margin-bottom: 40px;

    overflow: hidden;
    display: flex;
    color: #ffffff;

    position: relative;

    top: 3vh;
  }

  .line {
    background: #ffffff;
    width: 2px;
    height: 55px;
    margin-right: 16px;
  }

  .word {
    height: 55px;
  }

  .en-title {
    font-family: Helvetica;
    font-weight: bold;
    font-size: 32px;
    letter-spacing: -0.02em;
  }

  .cn-title {
    font-family: PingFang SC;
    font-size: 18px;
  }
</style>
