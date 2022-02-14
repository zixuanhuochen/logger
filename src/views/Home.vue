<template>
  <div class="home" :class="'bg-' + bg" >
    <Header :isLogin="isLogin" @singOut="singOut"></Header>
    <MainLeft class="left" @changeBG="changeBG"></MainLeft>
    <router-view class="mid"></router-view>
    <MainRight></MainRight>
  </div>
</template>

<script>
// import Header from '@/components/globl/Header.vue'
export default {
  name: "Home",
  data() {
    return {
      isLogin: false,
      bg: 0,
    };
  },
  beforeMount() {
    this.getUrl();
  },
  methods: {
    //挂载前判断本地是否有锁屏
    getUrl() {
      if (localStorage.getItem("lock") == "true") {
        this.$router.push("/lock");
      }
      this.bg = localStorage.getItem("bgimg") || 0;
      localStorage.getItem("token")
        ? (this.isLogin = true)
        : (this.isLogin = false);
    },
    changeBG(index) {
      this.bg = index;
    },
    singOut(){
      localStorage.removeItem('token'),
      localStorage.removeItem('lock'),
      sessionStorage.removeItem('path'),
      this.getUrl()
    }
  },
  
};
</script>

<style scoped lang="less">
.bg-0 {
  background: url("../assets/imges/bg/bg-0.jpg") no-repeat center;
}
.bg-1 {
  background: url("../assets/imges/bg/bg-1.jpg") no-repeat center;
}
.bg-2 {
  background: url("../assets/imges/bg/bg-2.jpg") no-repeat bottom;
}
.bg-3 {
  background: url("../assets/imges/bg/bg-3.jpg") no-repeat bottom;
}
.bg-4 {
  background: url("../assets/imges/bg/bg-4.jpg") no-repeat center;
}
.bg-5 {
  background: url("../assets/imges/bg/bg-5.jpg") no-repeat center;
}
.bg-6 {
  background: url("../assets/imges/bg/bg-6.jpg") no-repeat bottom;
}
.bg-7 {
  background: url("../assets/imges/bg/bg-7.jpg") no-repeat bottom;
}
.home {
  position: relative;
  width: 1920px;
  background-size: 100%;
  background-attachment: fixed;
 
  overflow: hidden;
  
  .mid {
    width: 1080px;
    min-height: 930px;
    margin-left: 350px;
    margin-top: 48px;
  }
}

</style>