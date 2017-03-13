/**
 *这个账号的路由用来处理 登录 登出 注册
 */
//1.导包
const express = require('express')
const path = require('path')

//2.创建路由
const studentManagerRouter = express.Router();

//3.导入studentManagerRouter所对应的accountController
const studentManagerCtrl = require(path.join(__dirname,'../controllers/studentManagerController.js'));

//获取学生列表
studentManagerRouter.get('/list',studentManagerCtrl.getStudentList);

//5.导出
module.exports = studentManagerRouter;
