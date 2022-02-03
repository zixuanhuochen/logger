<template>
  <div class="lock">
    <div class="psdInput">
      <input
        type="password"
        placeholder="请输入密码"
        class="psdInfo"
        v-model="lockInput"
      />
      <button class="btn" @click="unLock">解</button>
    </div>
  </div>
</template>

<script>
export default {
 
name: 'Lock',
data(){
  return {
    lockInfo:'hahaha',
    lockInput:'',
  }
},
methods:{
  unLock(){
    if(this.lockInput === this.lockInfo){
      localStorage.removeItem('lock')
      this.$router.push(JSON.parse(sessionStorage.getItem('path'))|| '/home')
    }else{

    }
  }
}
}
</script>

<style scoped lang="less">
.lock {
  position: relative;
  width: 1920px;
  height: 928px;
  background: url("../assets/imges/lock.png") no-repeat;
  background-size: 100%;
  background-position: center bottom;
  .psdInput {
    width: 150px;
    height: 60px;
    // background: red;
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translateX(-50%);

    .psdInfo {
      width: 100%;
      height: 30px;
      margin-bottom: 13px;
    }
    button {
      display: block;
      width: 30px;
      height: 30px;
      margin: 0 auto;
      transform: translateX(-4px);
      border-radius: 50%;
      background: rgba(225, 225, 225, 0.1);
      color: brown;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>