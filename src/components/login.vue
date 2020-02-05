<template>
  <div class="login">
     
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <h1 class="title"><i class="el-icon-user-solid"></i>admin-登录</h1>
      <el-form-item label="账号" prop="userName">
        <el-input type="text" v-model="loginForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="loginForm.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
      return {
        // 登录表单数据
        loginForm: {
          userName: '',
          passWord: '',
        },
        // 验证的规则
        rules:{
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },//非空验证
            { min: 5, max: 18, message: '长度在 5 到 18 个字符', trigger: 'blur' }//长度验证
          ],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' },//非空验证
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }//长度验证
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 保留this
            let _this = this;
            // 拿到账号和密码 发送请求给后端
            this.axios.post('/api/checklogin', {                       
                 userName: _this.loginForm.userName,
                 passWord: _this.loginForm.passWord 
            }).then(res => {
              // res 是传过来的对象
              console.log("接收后端响应登录请求数据" , res.data[0]);
              
              // 将用户信息保存到vuex中的state中
              // saveUser 是我们在mutations中设置的函数  res 是需要保存的数据
              _this.$store.commit('saveUser', res.data[0]);

              if(res.data.length){
                _this.$message({
                  showClose: true,
                  message: '登陆成功',
                  type: 'success'
                });
                // 路由跳转 主页入口
                _this.$router.push('/home');
              }else{
                  _this.$message({
                    showClose: true,
                    message: '登录失败',
                    type: 'error'
                  });
              }
            });
           
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
html,body{
  padding: 0;
  margin: 0;
}
html,body, #app ,.login{
  height: 100%;
}
.login{
  display: flex;
  /* 主轴：垂直居中方向 */
  justify-content: center;
  /* 侧轴：水平居中方向 */
  align-items: center;

}
.el-form{
  width: 400px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 0 20px 10px 10px;
}
.el-form .title{
  font-size: 22px;
  font-weight: bold;
  color: #333;
  padding: 20px 0 10px 55px;
}
</style>
