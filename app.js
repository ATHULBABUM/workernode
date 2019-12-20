const express= require('express');
var app = new express();
const chalk=require('chalk');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

const workersRouter=require('./src/routers/workersRouter')();
const signupRouter=require('./src/routers/signupRouter')();
const loginRouter=require('./src/routers/loginRouter')();


app.use(express.static(path.join(__dirname,"/public")));

app.use('/workers',workersRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

mongoose.connect("mongodb+srv://ATHULBABUM:amalbabu@cluster0-7ktkb.mongodb.net/test?retryWrites=true&w=majority");


app.listen(process.env.PORT|| 3000,()=>{
    console.log("listening to port "+chalk.green('3000'));
});
