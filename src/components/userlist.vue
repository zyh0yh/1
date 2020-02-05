<template >
    <div class="userlist"> 
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="clearfix-title"><i class="el-icon-monitor"></i>-账户管理</span>
            </div>
            <div class="text item">
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="username"
                    label="账号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="realname"
                    label="实名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="idType"
                    label="证件号">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="编辑"
                        width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleAlter(scope.row.id)" type="text" size="small">修改</el-button>
                            <el-button @click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
               
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
     data() {
      return {
            tableData: [
            {
            id:1,
            username: 'admin1',
            realname: '王小虎',
            idType: '上海市普陀区金沙江路 1518 弄'
            }
           
        ]
      }
    },
    methods:{
        handleAlter: function( id ){
            console.log('修改',id);
        },
        handleDel: function( id ){
            console.log('删除',id); 
        }
    }
}
</script>
<style scoped>
.text {
    font-size: 14px;
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
  .box-card .clearfix .clearfix-title{
     font-size: 18px;
     font-weight: bold;
     padding: 5px 0 0 10px;
     color: #222831;
  }
</style>