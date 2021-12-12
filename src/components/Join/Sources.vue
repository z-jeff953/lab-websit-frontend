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
          picsrc:
              'https://gitee.com/zjeff-953/picsBed/raw/master/image/20201216130318.svg',
          text: '1. 澳新银行的实习机会'
        },
        {
          picsrc:
              'https://gitee.com/zjeff-953/picsBed/raw/master/image/20201216130535.svg',
          text: '2. AR，AI，Blockchain \n 等前沿科技的探索'
        },
        {
          picsrc:
              'https://gitee.com/zjeff-953/picsBed/raw/master/image/20201216130557.svg',
          text: '3. 国际知名公司的 \n 先进工作管理模式'
        },
        {
          picsrc:
              'https://gitee.com/zjeff-953/picsBed/raw/master/image/20201216130556.svg',
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

    background-color: #191e30;

    margin: 106px auto 0 auto;
    height: 248px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
