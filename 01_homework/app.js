const express=require('express');
const mysql=require('mysql');
let app=express();
app.listen(8080);

//托管静态资源到public目录
app.use(express.static('./public'));
//连接mysql数据库
var pool=mysql.createPool({
  host:'127.0.0.1',
  post:3306,
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:15

});

//根据表单请求创建对应的路由
app.get('/add',function(req,res){
	//获取数据
	var obj=req.query;
	console.log(obj);
	//把数据插入到数据库
	//执行SQL语句
	pool.query('INSERT INTO dept SET ?'[obj],function(err,result){
		if(err)throw err;
		console.log(result);
		//如果数据插入成功，才会响应
		if(result.affectedRows>0){
			res.send('添加成功');
		}
  });	
});