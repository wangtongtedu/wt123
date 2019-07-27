const express=require('express');
var app=express();
app.listen(8080);

//中间件：验证用户是否为root,如果是root才允许访问路由
app.use('/list',function(req,res,next){
    //console.log('这是list的一个中间件');
	//检测用户是否为root req.query
	console.log(req.query);
	//判断用户名是否为root
	if(req.query.uname!=='root'){
	//响应，用户名错误
	res.send('用户名错误');
	}else{
	//用户名正确，继续往后执行
	next();
	}
});
//查看所有的数据列表路由
app.get('/list',function(req,res){
	res.send('这是所有的数据列表');
});

//创建路由，方法：get  url:/shopping;传递商品的价格price，要求在中间件中将商品的价格加100
app.use('/shopping',function(req,res,next){
    //把传递数据转为数值型
	req.query.price=Number(req.query.price);
	//获取商品的价格，在当前基础上加100
	req.query.price+=100;
	//执行下一个中间件，或者路由
	next()
});
//查看所有的数据列表路由
app.get('/shopping',function(req,res){
	res.send('商品价格为'+req.query.price);
});