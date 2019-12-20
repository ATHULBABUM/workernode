var express=require('express');
var signupRouter=express.Router();
var {signupModel}=require('../models/signupModel');

function route(){

    signupRouter.route('')
    .post((req,res)=>{
        signupModel.findOne({email:req.body.email},(err,data)=>{
            if(err){
                throw err;
            }else{
                console.log(data);
                console.log(req.body);
                if(!data){
                    var add=signupModel(req.body);
                    add.save((err,result)=>{
                        if(err){
                            res.json({status:"Error"});
                        }
                        else{
                            res.json({status:"success"});
                        }
                    });
                }else{
                    res.json({status:"Invalid"})
                }
            }
        })
    });
    return signupRouter;
}
module.exports=route;

