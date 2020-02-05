
// 引入mysql
const mysql = require('mysql');

// 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'vuexms'
//   database 名字是自己创建的数据库名字
});

// 暴露出去
module.exports = connection;