const express=require('express');
const app=express();
const mongoose = require('mongoose');
const DB='mongodb+srv://Pushpa123:54321@cluster0.bvzwu.mongodb.net/userdb?retryWrites=true&w=majority';
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    
    console.log(`connection succesfully`)

}).catch((err)=>console.log(`no connection`));
// middleware
const middleware=(req,res, next)=>{
    console.log('middleware')
    next();
}
// middleware();
app.get('/',(req,res)=>{
    res.send(`hello response from server`)
})
app.get('/about',middleware,(req,res)=>{
    console.log('this is about page')
    res.send(`about page`)
})
app.get('/home',(req,res)=>{
    res.send(`home`)
})
app.get('/login',(req,res)=>{
    res.send(`login`)
})
app.get('/register',(req,res)=>{
    res.send(`register`)

})
app.get('/feedback',(req,res)=>{
    res.send(`feedback`)
})
app.listen(5000,()=>{
    console.log(`server is running`)
})
