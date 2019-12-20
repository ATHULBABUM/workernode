const mongoose =require('mongoose');

var workerSchema=new mongoose.Schema({

    workerName:String,
    workerDesignation:String,
    workerAge:Number,
    workerPhone:Number,
    workerLocation:String

})

var workersModel=mongoose.model('workers',workerSchema);
module.exports={ workersModel };
