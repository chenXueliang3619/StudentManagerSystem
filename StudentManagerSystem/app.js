//1.导包
const express = require('express')
const path = require('path')

//2.create app
const app = express();

//deal with static source
app.use(express.static(path.join(__dirname,'./src/statics')));

//deal router
const accoutRouter = require(path.join(__dirname,'./src/routes/accountRouter.js'))
app.use('/account',accoutRouter);

//start server
app.listen(3000,'127.0.0.1',(err)=>{
    if (err) {
      console.log(err);
    }

    console.log("start success");
});
