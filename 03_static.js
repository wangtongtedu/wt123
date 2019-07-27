const express=require('express');
var app=express();
app.listen(8080);

//把所有的静态资源（html,css,js,图像...)托管到public目录，如果浏览器请求静态资源，会自动到public目录下寻找，不需要创建路由
//内置中间件
app.use(express.static('./public'));
app.use(express.static('./files'));
