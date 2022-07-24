<template>
    <div class="login-container">
    <!-- 登录 -->
    <div class="login-wrap">
      <div class="login">
        <div class="loginform">
          <ul class="tab clearFix">
            <li>
              <a href="##" style="border-right: 0" @click="changebtn1">扫码登录</a>
            </li>
            <li>
              <a href="##" class="current" @click="changebtn2">账户登录</a>
            </li>
          </ul>

          <div class="content" v-show="btnshow">
            <!-- 登录密码与账号输入的地方 -->
            <form action="##">
              <div class="input-text clearFix">
                <span id="img1">💾</span>
                <input
                  type="text"
                  placeholder="邮箱/用户名/手机号"
                  v-model="phone"
                />
              </div>
              <div class="input-text clearFix">
                <span id="img1" class="pwd">🔒</span>
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="password"
                />
              </div>
              <div class="setting clearFix">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <!-- 
                电脑登录按钮：会触发form表单默认行为
                stop:阻止事件的传播
                prevent:阻止默认事件
                once:事件仅仅触发一次
              -->
              <button class="btn" @click.prevent="login">
                登&nbsp;&nbsp;录
              </button>
            </form>

            <div class="call clearFix">
              <ul>
                <li><img src="./images/qq.png" alt="" /></li>
                <li><img src="./images/sina.png" alt="" /></li>
                <li><img src="./images/ali.png" alt="" /></li>
                <li><img src="./images/weixin.png" alt="" /></li>
              </ul>
              <router-link class="register" to="/register"
                >立即注册</router-link
              >
            </div>
          </div>

          <div id="img2" v-show="!btnshow">
            <img src="../Footer/images/wx_cz.jpg" alt="">
            <h4>请用手机微信扫一扫</h4>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'MyLogin',
    data() {
    return {
      //收集账号与密码
      phone: "",
      password: "",
      btnshow:true
    };
  },
  methods: {
    //显示按钮
    changebtn1(){
      this.btnshow=false
    },
    changebtn2(){
      this.btnshow=true
    },
    //登录按钮
    async login() {
      //整理参数
      const { phone, password } = this;
      //在发登录请求
      try {
        //登录成功
        await this.$store.dispatch("userLogin", { phone, password });

        let goPath = this.$route.query.redirect||'/home';
        //跳转到首页
        this.$router.push(goPath);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
   .login-wrap {
      height: 487px;
      background-color: #e93854;
   }
    .login {
      width: 1200px;
      height: 487px;
      margin: 0 auto;
      background: url(./images/loginbg.png) no-repeat;
    }
    form {
      margin: 15px 0 18px 0;
      font-size: 12px;
      line-height: 18px;
    }
     .loginform {
      width: 420px;
      height: 406px;
      box-sizing: border-box;
      background: #fff;
      float: right;
      top: 45px;
      position: relative;
      padding: 20px;
    }
    li{
      list-style-type: none;
    }
    .tab li{
      display: inline-table;
      border: 1px solid black;
      width: 187px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #fff;
      font-weight: 1000;
      font-size: 18px;
    }
    .tab li:hover{
      background-color: skyblue;
    }
    .call li{
      display: inline;
    }
    
    a{
      text-decoration: none;
    }
    .input-text{
      margin-top: 20px;
    }
    .input-text input{
      width: 80%;
      height: 30px;
      margin-left: 20px;
      outline: none;
    }
    .content{
      margin-top: 30px;
    }
    .setting{
      margin-top: 30px;
    }
    .forget{
      float: right;
    }
    .btn {
      background-color: #e1251b;
      padding: 6px;
      border-radius: 0;
      font-size: 16px;
      font-family: 微软雅黑;
      word-spacing: 4px;
      border: 1px solid #e1251b;
      color: #fff;
      width: 100%;
      height: 36px;
      margin-top: 25px;
      outline: none;
    }
    .register {
      float: right;
      font-size: 15px;
      line-height: 38px;
    }
    .call{
      margin-top: 30px;
    }
    .call ul{
      float: left;
    }
    .call li{
      margin-right: 5px;
    }
    .register:hover {
      color: #4cb9fc;
      text-decoration: underline;
    }
    #img1{
      border: 1px solid black;
      font-size: 25px;
      position: relative;
      left: 20px;
      top: 5px;
    }
    .checkbox{
      margin-left: 5px;
    }
    #img2{
      margin: 0 auto;
      text-align: center;

    }
    #img2 img{
      width: 200px;
      margin-top: 40px;
    }
</style>