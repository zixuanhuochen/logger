<!--  -->
<template>
  <div class="left">
    左侧组件
  </div>
</template>

<script>
export default {
  name: "MainLeft",
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
.left{
  position: absolute;
  top: 175px;
  left: 20px;
  width: 200px;
  height: 800px;
  background: turquoise;
  
}
</style>