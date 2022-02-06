<!--  -->
<template>
  <div class="left">
    <div class="bgcmain">
      <h2 @click="changeShow">更换主题</h2>
    </div>
    <ul v-show="isShow" @click="changeBgc($event)">
      <li v-for="(item,index) in bgcData " :key="index">
        <img :src="item" :alt="index">
      </li>
    </ul>
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
      bgcData: {
        bg0,bg1,bg2,bg3,bg4,bg5,bg6,bg7
      },
      isShow: false,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    changeShow(){
      this.isShow = !this.isShow
    },
    changeBgc(e){
     let indexId = e.target.alt
     indexId = indexId.split('g')[1]
     this.$emit('changeBG',indexId)
     localStorage.setItem('bgimg',indexId)
    }
  },
};
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
.left{
  position: absolute;
  top: 175px;
  left: 20px;
  width: 200px;
  // background: turquoise;
  h2{
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  img{
    width: 100%;
    border: 1px solid turquoise;
  }
  .bgcmain{
    margin: 10px;
  }
}
</style>