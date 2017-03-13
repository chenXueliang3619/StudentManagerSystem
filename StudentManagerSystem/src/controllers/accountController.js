/**
 *所有账号的逻辑请求就写在这里
 * 
 */
//导包
const fs = require('fs')
const path = require('path')
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
