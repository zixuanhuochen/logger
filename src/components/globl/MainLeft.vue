<!--  -->
<template>
  <div class="left">
    左侧组件
  </div>
</template>

<script>
import bg0 from '../../assets/imges/bg/bg-0.jpg'
import bg1 from '../../assets/imges/bg/bg-1.jpg'
import bg2 from '../../assets/imges/bg/bg-2.jpg'
import bg3 from '../../assets/imges/bg/bg-3.jpg'
import bg4 from '../../assets/imges/bg/bg-4.jpg'
import bg5 from '../../assets/imges/bg/bg-5.jpg'
import bg6 from '../../assets/imges/bg/bg-6.jpg'
import bg7 from '../../assets/imges/bg/bg-7.jpg'
export default {
  
  name: "MainLeft",
  data() {
    return {
      
    };
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