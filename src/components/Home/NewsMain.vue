<!--  -->
<template>
  <div class="newBox"> 
    <ul>
      <li v-for="item in newsMain" :key="item.id">
        <div class="imgbox">
        <a :href="item.url" target="_blank"><img :src="item.picUrl" alt="" class="imgpic"></a>
        </div>
        <div class="content">
          <a :href="item.url" target="_blank"><h2>{{item.title}}</h2></a>
          <span>{{item.description}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewsMain",
  props:['newsMain'],
  data() {
    return {
      
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  
  },
  methods: {
   
  },
  computed:{
  
  }
};
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */
.newBox{
  width: 75%;
}
ul{
  // margin: 30px;
  margin-left: 20px;
  width: 100%;
}
li{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  padding: 20px;
  border: 1px solid turquoise;
  margin-bottom: 5px;
  .imgbox{
    width: 210px;
    height: 120px;
    a{
      width: 100%;
      height: 100%;
      .imgpic{
      width: 100%;
      height: 100%;
    }
    };
  }
  .content{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    h2{
      color:black;
      margin-bottom: 15px;
    }
  }
}
</style>