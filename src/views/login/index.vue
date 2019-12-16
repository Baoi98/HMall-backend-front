<template>
  <div>
    <el-card class="login-container">
      <el-form autoComplete="on"
               :model="loginForm"
               :rules="loginRules"
               ref="loginForm"
               label-position="left"
               label-width="0px"
               class="card-box login-form">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: white;margin-bottom: 30px;"></svg-icon>
        </div>
        <h3 class="title">极客商城管理系统</h3>
        <el-form-item prop="username">
          <span class="svg-container svg-container_login">
            <svg-icon icon-class="user"></svg-icon>
          </span>
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入管理员账户">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
              <svg-icon icon-class="password"></svg-icon>
          </span>
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
          </el-input>
          <span class="show-pwd"
              @click="showPwd">
              <svg-icon icon-class="eye" />
          </span>
        </el-form-item>
        <el-form-item>
          <div id="vaptchaContainer" style="width: 328px;height: 36px;">
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="/" target="_blank">
                  <img src="https://r.vaptcha.com/public/img/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">Vaptcha启动中...</span>
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button style="width: 100%" type="primary" :loading="loading"
                     @click.native.prevent="handleLogin()">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <img :src="login_center_bg" class="login-center-layout">

  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate';
  import login_center_bg from '@/assets/images/login_center_bg.png'

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
      };
      return {
        loginForm: {
          username: 'admin',
          password: '',
        },
        canLogin: false,
        loginRules: {
            username: [{required: true, trigger: 'blur', validator: validateUsername}],
            password: [{required: true, trigger: 'blur', validator: validatePass}]
        },
        loading: false,
        pwdType: 'password',
        login_center_bg,
        dialogVisible:false,
        supportDialogVisible:false
      }
    },
    mounted() {
        this.initVaptcha()
    },
    methods: {
      initVaptcha () {
          vaptcha({
              vid: '5dd4fdc249f7cf7ffb8570b6',
              type: 'click',
              style: 'light',
              scene: 0, // 场景值 默认0
              offline_server: 'https://www.vaptchadowntime.com/dometime', //离线模式服务端地址
              container: '#vaptchaContainer'
          }).then(vaptchaObj => {
              vaptchaObj.render()
              vaptchaObj.listen('pass', () => {
                this.canLogin = true
              })
          })
      },
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            if(this.canLogin == true){
              this.loading = true
              this.$store.dispatch('Login', this.loginForm).then(() => {
                  this.loading = false;
                  this.$router.push({path: '/'})
              }).catch(() => {
                  this.loading = false
              })
            }
            else{
                alert("123")
            }
          } else {
            console.log('参数验证不合法！');
            return false
          }
        })
      },
      dialogConfirm(){
        this.dialogVisible =false;
        setSupport(true);
      },
      dialogCancel(){
        this.dialogVisible = false;
        setSupport(false);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }

  /*.vaptcha-init-main {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #EEEEEE;
  }
  ​
  .vaptcha-init-loading {
    display: table-cell;
    vertical-align: middle;
    text-align: center
  }
  ​
  .vaptcha-init-loading>a {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: none;
  }
  ​
  .vaptcha-init-loading>a img {
    vertical-align: middle
  }
  ​
  .vaptcha-init-loading .vaptcha-text {
    font-family: sans-serif;
    font-size: 12px;
    color: #CCCCCC;
    vertical-align: middle
  }*/
</style>
