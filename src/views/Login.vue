<template>
  <div class="login">
    <div class="loginInfo">
      <h2>账号</h2>
      <input type="text" placeholder="请输入账号" v-model="userInfo.username" />
      <h2>密码</h2>
      <input type="password" placeholder="请输入密码" v-model="userInfo.password" />
      <div>
        <button @click="userLogin">登录</button>
        <button>联系管理员</button>
      </div>
    </div>
  </div>
</template>

<script>
import { toLogin} from '@/network/index'
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
    };
  },
  mounted() {},
  methods: {
    async userLogin(){
     try {
       const result = await toLogin(this.userInfo)
      if(result.status === 0){
        localStorage.setItem('token', result.token)
        this.$router.push('/home')
      }
     } catch (error) {
       console.log(error);
     }
    }
  },
};
</script>

<style scoped lang="less">
.login {
  position: relative;
  width: 1920px;
  height: 928px;
  background: url("../assets/imges/login.jpg") no-repeat;
  background-size: 100%;
  background-position: left bottom;
  .loginInfo {
    width: 300px;
    // background: brown;
    padding: 40px 40px;
    border: 1px solid skyblue;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
    input {
      width: 100%;
      height: 30px;
      margin: 25px 0;
    }
    div {
      display: flex;
      justify-content: space-between;
      button {
        height: 30px;
        background: rgba(241, 9, 9, 0.1);
        outline: none;
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>