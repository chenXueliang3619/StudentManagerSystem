//导包
const express = require('express')
//创建路由
const accountRouter = express.Router()
//导入accountController
const accoutCtrl = path.join(__dirname,'../controllers/accountController.js')
//获取登录页面
accountRouter.get('/login',accoutCtrl.getLoginPage)
//导出
module.exports = accountRouter
