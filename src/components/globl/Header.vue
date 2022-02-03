<template>
  <div class="header">
    <ul class="left">
      <router-link to="/home" tag="li">首页</router-link>
      <router-link to="/home/news" tag="li">新闻热点</router-link>
      <router-link to="/home/smile" tag="li">每日一笑</router-link>
      <router-link to="/home/subscribe" tag="li">订阅</router-link>
     
    </ul>
    <ul class="right">
      <!-- <router-link to="/lock" tag="li" @click="lockScreen">锁屏</router-link> -->
      <li @click="lockScreen">锁屏</li>
      <router-link to="/login" tag="li">Login</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Header',
  methods:{
    lockScreen(){
      //点击锁屏后保存当前路径及锁屏状态
      sessionStorage.setItem('path',JSON.stringify(this.$route.fullPath))
      localStorage.setItem('lock',true)
      this.$router.push('/lock')
    }
  }

}
</script>

<style lang="less" scoped>
.header{
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  ul{
    display: flex;
    li{
      padding: 0 20px
    };
    li:hover{
      background-color: rgba(91, 214, 214,0.4);
      border-radius: 15px;
      cursor: pointer;
      // border: 1px solid red;
    }
  }
}
</style>