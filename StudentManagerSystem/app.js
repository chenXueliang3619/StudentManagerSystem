'use strict'
//导包
const express = require('express')
const path = require('path')
const app = express()
const accoutRouter=path.join(__dirname,'src/routes/accountRoute.js')
app.use('/account',accoutRouter)
//启动服务器
app.listen(3333,'127.0.0.1',(err)=>{
  if (err) {
    console.log(err)
  }
  console.log('服务器启动成功')
})
