<template>
  <div class="login">
    <div class="loginInfo">
      <h2>账号</h2>
      <input type="text" placeholder="请输入账号">
      <h2>密码</h2>
      <input type="password" placeholder="请输入密码">
      <div>
        <button>登录</button>
        <button>联系管理员</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Login',
}
</script>

<style scoped lang="less">
.login{
  position: relative;
  width: 1920px;
  height:928px;
  background: url('../assets/imges/login.jpg') no-repeat;
  background-size: 100%;
  background-position: left bottom;
  .loginInfo{
    width: 300px;
    // background: brown;
    padding: 40px 40px;
    border: 1px solid skyblue;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
    input{
      width: 100%;
      height: 30px;
      margin: 25px 0;
    }
    div{
      display: flex;
      justify-content: space-between;
      button{
    height: 30px;
    background: rgba(241, 9, 9, 0.1);
    outline: none;
    border-width: 0;
    border-radius: 10px;
    cursor:pointer
  
  }
    }
  }
}
</style>