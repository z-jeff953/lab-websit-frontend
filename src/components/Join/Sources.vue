<template>
  <div class="sources">
    <my-source
      v-for="(source, index) in sources"
      :key="index"
      :picsrc="source.picsrc"
      :text="source.text"
    ></my-source>
  </div>
</template>

<script>
import MySource from './MySource'
export default {
  name: 'Sources',
  data () {
    return {
      sources: [
        {
          picsrc: require('../../assets/join_us/1.svg'),
          text: '1. 澳新银行的实习机会'
        },
        {
          picsrc: require('../../assets/join_us/2.svg'),
          text: '2. AR，AI，Blockchain \n 等前沿科技的探索'
        },
        {
          picsrc: require('../../assets/join_us/3.svg'),
          text: '3. 国际知名公司的 \n 先进工作管理模式'
        },
        {
          picsrc: require('../../assets/join_us/4.svg'),
          text: '4. 拓展职场人脉'
        }
      ]
    }
  },
  components: {
    MySource
  }
}
</script>

<style scoped>
  .sources {
    min-width: 1075px;
    width: 80vw;

    margin: 106px auto 0 auto;
    height: 248px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
