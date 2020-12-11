<template>
  <div class="form-item">
    <label :for="lableForm" class="lable">
      <message>{{ lable }}</message>
    </label>
    <input :type="inputtype" />
  </div>
</template>

<script>
import Message from '../Massage'

export default {
  name: 'FormItem',
  props: {
    lableForm: {
      type: String,
      default: '标签'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    lable: {
      type: String,
      default: '请输入'
    }
  },
  components: {
    Message
  }
}
</script>

<style scoped>
  .lable {
    width: 80xp;
  }
</style>
