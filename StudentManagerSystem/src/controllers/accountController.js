/**
 *所有账号的逻辑请求就写在这里
 * 
 */
//导包
const fs = require('fs')
const path = require('path')
const MongoClient = require('mongodb').MongoClient

//获取登录页面
exports.getLoginPage = (req,res)=>{
    //处理获取登录页面的逻辑
    fs.readFile(path.join(__dirname,'../views/login.html'),(err,data)=>{
        if (err) {
          console.log(err);
        }

        //设置响应头
        res.setHeader("Content-Type","text/html;charset=utf-8");

        //返回数据
        res.end(data);
    })
}

//处理登录逻辑
exports.login = (req,res)=>{
   //1.获取参数
   console.log(req.body);

   //2.应该拿着req.body.uname&req.body.pwd去数据库中查询比对
   // Connection URL 
  var url = 'mongodb://localhost:27017/bjhmqd05';
  // Use connect method to connect to the Server 
  MongoClient.connect(url, function(err, db) {
        //db 来查询集合(account)中的数据
        db.collection('account').findOne({username:req.body.uname,password:req.body.pwd,status:0},(err,doc)=>{
            if (doc!=null) {
               res.end("<script>window.location.href='/studentmanager/list';</script>");
            }else{
              res.end("<script>alert('用户或是密码有误');window.location.href='/account/login';</script>");
            }
        });
  });
}
