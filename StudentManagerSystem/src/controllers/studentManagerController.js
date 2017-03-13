/**
 *对学生的数据进行增删查改
 */
//导包
const xtpl = require('xtpl');
const path = require('path');
const MongoClient = require('mongodb').MongoClient

exports.getStudentList = (req,res)=>{

        //1.获取学生列表数据
      var url = 'mongodb://localhost:27017/bjhmqd05';
      // Use connect method to connect to the Server 
      MongoClient.connect(url, function(err, db) {
            //db 来查询集合(studentinfo)中的数据
            db.collection('studentinfo').find({}).toArray(function(err, docs) {
                    //将渲染的操作一定得放在这里
                    //2.读取studentlist.html
                    xtpl.renderFile(path.join(__dirname,'../views/studentlist.html'),{studentlist:docs},(err,content)=>{
                         if (err) {
                          console.log(err);
                        }

                        //设置响应头
                        res.setHeader("Content-Type","text/html;charset=utf-8");

                        //返回数据
                        res.end(content);
                    })
            });
      });

    
}
