/**
 *这个账号的路由用来处理 登录 登出 注册
 */
//1.导包
const express = require('express')
const path = require('path')

//2.创建路由
const accountRouter = express.Router();

//3.导入accountRouter所对应的accountController
const accoutCtrl = require(path.join(__dirname,'../controllers/accountController.js'));

//获取登录页面
accountRouter.get('/login',accoutCtrl.getLoginPage);
//处理登录逻辑
accountRouter.post('/login',accoutCtrl.login);

//5.导出
module.exports = accountRouter;
