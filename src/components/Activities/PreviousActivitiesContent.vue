<template>
 <div class="previous-activities-content">
   <activities-pictrue></activities-pictrue>

 </div>
</template>

<script>
import ActivitiesPictrue from './ActivitiesPictrue'
// TODO: 懒加载, 图片组件重构
export default {
  name: 'PreviousActivitiesContent',
  data () {
    return {
    }
  },
  components: {
    ActivitiesPictrue
  }
}
</script>

<style scoped>
.previous-activities-content{
  margin-top: 80px;
}
</style>
