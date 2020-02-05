<template>
    <div class="index">
        <el-container style="border: 1px solid #eee">
            <!-- 左侧导航 -->
            <el-aside width="200px"  style="background-color:#222831">
                <el-menu 
                        router 
                        default-active="home"
                        :default-openeds="['1']"  
                        background-color="#222831"
                        text-color="#fff"
                        active-text-color="#00adb5">
                    <!-- 首页导航 -->
                    <el-menu-item-group>
                        <el-menu-item index="home" color="#00adb5"> <h1 class="title" ><i class="el-icon-s-home" style="padding:0 10px 0 0" ></i>- vue管理系统</h1></el-menu-item>
                    </el-menu-item-group>
                    <!-- 导航一 -->
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <el-menu-item index="userlist">账户管理</el-menu-item>
                            <el-menu-item index="adduser">添加账户</el-menu-item>
                            <el-menu-item index="deluser">修改密码</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- 导航二 -->
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- 导航三 -->
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>   
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 右侧内容区 -->
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-s-check" style="margin-right: 15px;color: #eeeeee;font-size:16px;font-weight: bold;"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>退出系统</el-dropdown-item>   
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="usur-name" style="color: #eeeeee;font-size:16px;font-weight: bold;">{{username}}</span>
                </el-header>
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
    },
    computed: {
      username(){
          return this.$store.state.userinfo.username;
      }  
    },
}
</script>
<style >
    .el-header {
        background-color: #393e46;
        color: #333;
        line-height: 60px;
    }
    html,body,#app,.index{
        height: 100%;
    }
    .el-container{
        height: 100%;
        
    }
    .el-menu{
        border-right: 0;
    }
    .top-title{
        text-align: center;
    }
    .title{
        font-weight: bold;
    }
    .el-aside{
        height:100%;
    }
</style>