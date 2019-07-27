const mysql=require('mysql');
//创建连接对象，设置连接池大小
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	user:'root',
	password:'',
	database:'tedu',
	connectionLimit:20 //设置连接池大小
});
//执行SQL语句
//查询编号为7的员工
pool.query('SELECT * FROM emp WHERE eid=?',[7],function(err,result){
  if(err) throw err;
  console.log(result);
});