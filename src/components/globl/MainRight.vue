<!--  -->
<template>
  <div class="right">
    右侧组件
  </div>
</template>

<script>
export default {
  name: "MainRight",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
.right{
  position: absolute;
  top: 175px;
  right: 20px;
  width: 300px;
  height: 800px;
  background:yellow;
  
}
</style>