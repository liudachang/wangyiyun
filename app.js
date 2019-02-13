//vue_app_server 服务器
//   app.js 
//   public/img/banner1.png ...
const express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000);
const pool = require("./pool");


//express mysql 参数 request;response
//跨域访问配置
//1:加载模块cors
const cors = require("cors");
//2:配置cors
app.use(cors({
  //脚手架是3001  允许访问我3000 跨域
  origin:["http://127.0.0.1:3001",
         "http://localhost:3001"],//允许列表
  credentials:true   //是否验证
}))



//功能一:首页轮播
 app.get("/getImages",(req,res)=>{
   var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/109951163786237658.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/109951163788872523.jpg"}
   ];
   res.send(rows)
 })
//   var sql = "SELECT img_url FROM wyy_yy";
// pool.query(sql,(err,result)=>{
//   if(err)throw err;
  
//   res.send(result);
// })
// })