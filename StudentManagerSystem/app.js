//1.导包
const express = require('express')

//2.create app
const app = express();

app.all('/',(req,res)=>{
    res.end("OK");
})

//start server
app.listen(3000,'127.0.0.1',(err)=>{
    if (err) {
      console.log(err);
    }

    console.log("start success");
});
