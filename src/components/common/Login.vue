<!-- login -->
<template>
  <div class="wrapper">
      <h1>后台管理系统</h1>
      <div class="login">
        <i-form ref="loginFrom" :model="loginFrom" :rules="loginRule">
            <Form-item prop="user">
                <Input v-model="loginFrom.user"/>
            </Form-item>
            <Form-item prop="password">
                <Input v-model="loginFrom.password" type="password"/>
            </Form-item>
            <Form-item>
                <i-button type="success" @click.native="handleSubmit('loginFrom')" @keyup.enter="handleSubmit('loginFrom')" long>登录</i-button>
            </Form-item>
        </i-form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginFrom: {
        user: '',
        password: ''
      },
      loginRule: {
        user: [{
          required: true,
          message: '请填写用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请填写密码',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 6,
          message: '密码长度不能小于 6 位',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.loginFrom.user)
          console.log(this.loginFrom.password)
          this.$router.push('/about')
        } else {
          alert('验证失败')
        }
      })
    }
  }
}
</script>
<style scoped>
.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 260px;
    padding-bottom: 200px;
    background:#37996E;
    /* background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(rgba(0, 0, 255, 0.5))); */
    /*background: #fff;*/
    /*url(http://78rbeb.com1.z0.glb.clouddn.com/wp-content/uploads/2014/03/free-blurred-web-backgrounds-04.jpg);*/
}
.wrapper > h1{
  text-align: center;
  vertical-align: middle;
  margin-bottom: 20px;
  color: #000;
}
.login {
    margin: 0 auto;
    padding: 200px auto;
    width: 200px;
    height: 100%;
}
</style>
