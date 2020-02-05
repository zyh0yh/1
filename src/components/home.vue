<template>
  <div class="home">
    <div class="flexbox">
      <el-card class="box-card" style="  padding: 10px 0;margin: 5px 5px 5px 10px;">
        <div slot="header" class="clearfix">
          <span style="font-size:20px; font-weight: bold; color:#222831;"
            ><i class="el-icon-location-outline"></i>{{ weather.city }}</span
          >
        </div>
        <div class="text item" style="display:flex;">
          <div class="weather">
            <img :src="weatherimg" alt="" />
            <span style="font-size:32px; font-weight: bold;color:#222831;"
              >{{ weather.weather }}
            </span>
            <span style="font-size:20px; font-weight: bold;color:#00adb5;"
              >{{ weather.temp }}℃</span
            >
          </div>
          <div class="time" style="font-size:16px;font-weight: bold;">
            <span style="font-size:20px; font-weight: bold;color:#00adb5;">{{
              weather.uptime
            }}</span
            ><br />
            <span>{{ weather.today }}</span
            ><br />
            <span
              >{{ weather.wd }}--{{ weather.wden }}--{{ weather.wdforce }}</span
            >
          </div>
        </div>
      </el-card>
      <el-card class="box-card" style="padding: 10px 0;margin: 5px 10px 5px 0;">
        <div slot="header" class="clearfix">
          <span style="font-size:20px; font-weight: bold; color:#222831;"
            ><i class="el-icon-s-order"></i>用户信息卡</span
          >
        </div>
        <div class="text item">用户账号 ：{{ userinfo.username }}</div>
        <div class="text item">用户密码 ：{{ userinfo.password }}</div>
        <div class="text item">用户实名 ：{{ userinfo.realname }}</div>
        <div class="text item">用户证件 ：{{ userinfo.idType }}</div>
      </el-card>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章主题" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-select v-model="ruleForm.author" placeholder="请选择作者">
          <el-option label="Mr章" value="zyh"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发表时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="文章类型" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Vue.js" name="Vue.js"></el-checkbox>
          <el-checkbox label="Node.js" name="Node.js"></el-checkbox>
          <el-checkbox label="html-css" name="html-css"></el-checkbox>
          <el-checkbox label="JavaScript" name="JavaScript"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="笔记内容" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >写笔记</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-main>
        <!-- 第一篇文章 -->
        <el-card class="box-card" width="100%" >
            <div slot="header" class="clearfix">
                <span>这是我的第一篇笔记</span>
                <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
            </div>
            <div class="text item">
                测试的东西
            </div>
        </el-card>
        <!-- <el-card class="box-card" width="100%" v-for="(form,index) in form" :key="index">
            <div slot="header" class="clearfix">
                <span>{{form.name}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">删除</el-button>
            </div>
            <div class="text item">
                {{form.desc}}
            </div>
            <div class="text item">
                {{form.date1}}--{{form.author}}
            </div>
            <div class="text item">
               <el-tag>{{form.type}}</el-tag> 
            </div>
        </el-card> -->
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weather: [],
      weatherimg: "",
      ruleForm: {
        name: "",
        author: "",
        date1: "",
        delivery: false,
        type: [],
        desc: ""
      },
    //   form:[JSON.parse(localStorage.getItem('formtext' ))],
      // 这是表单验证
      rules: {
        name: [{ required: true, message: "请输入主题", trigger: "blur" }],
        author: [{ required: true, message: "请选择作者", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个分类",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写笔记", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      let _this = this;
      //表单验证
      _this.$refs[formName].validate(valid => {
        if (valid) {
          // 验证成功后,打印验证是否有数据
          console.log(_this.ruleForm);
          // 再将数据添加本地存储
        //   _this.form.push(_this.ruleForm);
         localStorage.setItem('formtext',JSON.stringify( _this.ruleForm ));

         _this.axios.post('/api/usertext', {                       
                 name: _this.ruleForm.name,
                author: _this.ruleForm.author,
                date: _this.ruleForm.date1,
                type: _this.ruleForm.type[0],
                desc: _this.ruleForm.desc
            }).then(res => {
              
            });

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    // // 保留this
    let _this = this;
    // 请求天气api
    _this.axios
      .get("http://api.help.bj.cn/apis/weather/?id=101300101")
      .then(res => {
        // console.log(res.data);
        _this.weather = res.data;
        _this.weatherimg = res.data.weatherimg;
      });
  },
  computed: {
    // 取vuex全局数据
    userinfo() {
      return this.$store.state.userinfo;
    }
  }
}
</script>
<style scoped>
.text {
  font-size: 16px;
  font-weight: bold;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {

  width: 100%;
}
.flexbox {
  display: flex;
}
.time {
  margin-left: 100px;
  padding-top: 30px;
}
.el-form {
  margin: 5px 10px;
  width:97%;
}
.home{
    overflow:scroll;
}
</style>
