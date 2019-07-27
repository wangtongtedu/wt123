const express=require('express');
//const querystring=require('querystring');
//1.引入body-parser中间件
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);
//托管静态资源到public目录
app.use(express.static('./public'));
//2.使用body-parser中间,获取post的请求的数据，并解析为对象
app.use(bodyParser.urlencoded({
	extended:false  //不使用扩展的查询字符串模块qs,而是使用官方提供的querystring模板解析为对象
})  );

//根据表单请求，创建对应的路由
//post  /mylogin
//app.get('/login',function(req,res){
//res.sendFile(__dirname+'/login.html');
//});
app.post('/mylogin',function(req,res){
	/*
	req.on('data',function(chunk){
	//chunk就是传递的数据
	var str=chunk.toString();
    //console.log(str);
    var obj=querystring.parse(str);
	console.log(obj);
	});
	*/
  console.log(req.body);
  res.send(`注册成功,
  用户名:${req.body.uname}
  密码:${req.body.upwd}`);
});


