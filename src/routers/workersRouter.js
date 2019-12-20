var express=require('express');
var { workersModel }= require('../models/workersModel');
var { signupModel }=require('../models/signupModel')
var workersRouter = express.Router();

function route(){
    workersRouter.route('/')
       .get((req,res)=>{
           workersModel.find((err,data)=>{
               if(err){
                   res.json({status:"error"});
               }else{
                   res.json({workers:data});
               }
           });
    });

    workersRouter.route('/add')
    .post((req,res)=>{
        var worker=new workersModel(req.body);
        worker.save((err,result)=>{
            if(err){
                console.log(err);
                res.json({status:"error"});
            }else{
                console.log(result);
                res.json({status:"success"})
            }
        });
    });

    workersRouter.route('/update')
    .post((req,res)=>{
        console.log("000000",req.body);
        workersModel.update({workerPhone:req.body.workerPhone},{$set:req.body},(err,result)=>{
            console.log('aaa',err,result);
            if(err){
                console.log("000");
                res.json({status:"Error"});
            }else{
                // console.log(signupModel.fullname);
                res.json({status:"Success"})
            }
        });
    });

    workersRouter.route('/delete')
    .post((req,res)=>{
        console.log(req.body.id);
        signupModel.findByIdAndDelete(req.body.id,(err,result)=>{
            if(err){
                console.log("error");
                res.json({status:"Error"});
            }else{
                console.log("deleted");
                res.json({status:"Success"});
            }
        })
    });

    workersRouter.route('/deletepro')
    .post((req,res)=>{
        console.log(req.body.id);
        workersModel.deleteOne({ workerPhone: req.body.id }, (err, result) => {
            console.log(err,result);
            if(err){
                res.json({status:"error"});
            }else{
                console.log("remove");
                res.json({status:"success"});
            }
        })
    })


    return workersRouter;
}
module.exports=route;
