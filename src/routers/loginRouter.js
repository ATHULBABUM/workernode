
var express=require('express');
var loginRouter=express.Router();
var {signupModel}=require('../models/signupModel');
status:String;
function route(){

    loginRouter.route('/')
    .post((req, res) => {
        console.log("login works in back");
        signupModel.findOne({email:req.body.email,password:req.body.password},(err,data) => {
            console.log(data);
            if (err) {
                res.json({ Status: "Error" });
            }
            else if (!data) {
                res.json({ Status: "Invalid" });
            }
            else {
                console.log("login backend is success");
                res.json({ Status: "Success" , register:data});
            
            }
        });
    });
    return loginRouter;

}
module.exports = route;