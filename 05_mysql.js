//引入mysql模块
const mysql=require('mysql');
//建立连接
//创建连接对象

var connection=mysql.createConnection({
  host:'127.0.0.1',
  port:3306,//端口
  user:'root',
  password:'',
  database:'tedu',//连接后使用的数据库
});
//执行连接
connection.connect();
//查询所有员工数据
//执行SQL语句
connection.query('SELECT * FROM emp',function(err,result){
	//err可能产生的错误
	//result SQL语句的执行结果
	if(err)throw err;
	console.log(result);
});
//插入数据

//练习：往员工表插入一条数据
connection.query(`INSERT INTO emp VALUES(?,?,?,?,?,?)`,[null,'karl',0,'199-8-2',7500,20],function(err,result){
 if(err)throw err;
 console.log(result);

});

var person={
	eid:null,
	ename:'david',
	sex:1,
	birthday:'1999-6-20',
	salary:7923,
	deptId:10
}
//插入对象形式的数据
connection.query('INSERT INTO emp SET?',[person],function(err,result){
if(err)throw err;
console.log(result);
});

//修改编号为5的数据的性别和生日
connection.query('UPDATE emp SET sex=?,birthday=?, WHERE eid=?',[0,'1994-5-7',5],function(err,result){
  if(err)throw err;
  console.log(result);
};
//删除编号为10的数据
connection.('DELETE FROM emp WHERE eid=?';[10],function(err,result){
	if(err)throw err;
	console.log(result);
});

//关闭连接
connection.end();

