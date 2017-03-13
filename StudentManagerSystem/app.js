//1.导包
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//2.create app
const app = express();

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

//deal with static source
app.use(express.static(path.join(__dirname,'./src/statics')));

//deal router
const accoutRouter = require(path.join(__dirname,'./src/routes/accountRouter.js'))
const studentManagerRouter = require(path.join(__dirname,'./src/routes/studentManagerRouter.js'))
app.use('/account',accoutRouter);
app.use('/studentmanager',studentManagerRouter);

//start server
app.listen(3000,'127.0.0.1',(err)=>{
    if (err) {
      console.log(err);
    }

    console.log("start success");
});
