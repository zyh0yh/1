var express = require('express');
var router = express.Router();

// 引入连接mysql模块
const connection = require('./mysql');

// 连接数据库
connection.connect(() =>{
  console.log('数据库连接成功');
})
// 接收登录请求
router.post('/checklogin', (req, res) => {
  // 接受账号和密码
  let { userName , passWord } = req.body;
  // console.log( userName , passWord );

  // 执行数据库语法查询 语句外面需要用到反引号``
  const sqlStr = `select * from users where username = '${userName}' and password = '${passWord}'`;
  connection.query(sqlStr,( err, data ) => {
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })
})
router.post('/usertext',(req,res) =>{ 
  res.send('1');
  let {name , author ,date ,type , text } = req.body;
  const sqlStr = `insert into usertext(name,author,date1,type,text) values('${name}','${author}','${date}','${type}','${text}');`;
  connection.query(sqlStr,(err,data) =>{
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })
})

module.exports = router;

/*
  数据库操作————
 
  d: 进入d盘
  cd 到phpstudy目录
  cd 到mysql目录
  cd 到bin目录
  执行mysql -hlocalhost -uroot -proot 进入数据库
  执行create database vuexms; 创建一个vuexms名字的数据库（create database 数据库名;）
  use vusxms; 使用vuexms数据库  选择数据库（use 数据库名；）
 
 执行 create table users (
     id int primary key auto_increment,
     username varchar(50),
     password varchar(50),
     realname varchar(50),
     idType varchar(50)
  ); 创建表
   create table text (
     id int primary key auto_increment,
     name varchar(50),
     author varchar(50),
     date1 varchar(50),
     type varchar(50),
     text varchar(65533) 
  ); 
  desc users; 查看表结构

  insert into users(username,password,realname,idType) values('admin','123456','章友辉','520202xxxxxxxxxxxx');
  insert into users(username,password,realname,idType) values('zyhzyh','123456','zyhzyh','520203xxxxxxxxxxxx');
  insert into users(username,password,realname,idType) values('libai','123456','李白','520203xxxxxxxxxxxx');
  (往库中插入数据)
  select * from users; (查询数据库)
  select * from users where 表单名='需要查询的值' (根据条件查询)
  select * from users where username='admin'

  delete from 表名 where id = ?  删除特定属性的一条记录
  DROP TABLE 表名   删除这个表
 */