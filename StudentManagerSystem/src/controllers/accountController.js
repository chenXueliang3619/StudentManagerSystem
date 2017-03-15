//导包
const fs = require('fs')
//获取登录页面的方法
exports.getLoginPage = (req,res)=>{
  fs.readFile(path.join(__dirname,'../views/login.html'),(err,data)=>{
    if (err) {
      console.log(err)
    }
    //设置响应头
    res.setHeader("Content-Type","text/html;charset=utf-8");
   //返回数据
    res.end(data);
  })
}
