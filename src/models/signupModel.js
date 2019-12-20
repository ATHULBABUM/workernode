const mongoose=require('mongoose');
var signupSchema = new mongoose.Schema({
    fullName:{type:String,require:true },
    designation:String,
    email:String,
    password:String,
    confirmPassword:String,
    gender:String,
    age:Number,
    phone:Number,
    location:String
});
var signupModel=mongoose.model('registerData',signupSchema);
module.exports={signupModel};