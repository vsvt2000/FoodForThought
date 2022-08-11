const express=require('express')
const app = express()
const cors=require('cors')
const axios = require('axios')
const mongoose=require('mongoose')
const User = require('./models/fpp-models')
const Articles = require('./models/article-models')
mongoose.connect("mongodb+srv://root:password@cluster0.30iet.mongodb.net/fft")
app.use(cors())
var session={}
session["name"]=null
app.post("/api/register",(req) =>{
    
    console.log(req.query);
    //console.log(req)
    function getreq(){
        return req.query
    }
    try{
        const user =  User.create({
            name:getreq().name,
            age:getreq().age,
            gender:getreq().gender,
            email:getreq().email,
            username:getreq().username,
            password:getreq().password

        })
        const article = Articles.create({
            author: getreq().username,
            date: new Date(),
            title:'Mental Health',
            content:getreq().samplepost
        })
        console.log('res')
    }catch(err){
        console.log(err)
    }
    res="content received"
    
})

app.post("/api/login",(req,res) =>{
    function getreq(){
        return req.query
    }
    var db=mongoose.connection;
    //console.log(db);
    try{
        var user = db.collections["User"].find({
            username:getreq().username,
            password:getreq().password
        })
        user.toArray(function(err,results){
            if (results.length>0){
                //console.log(results)
                session["name"]=getreq().username
                res.send("logged in,session set");
            }
        });
        
    }catch(err){
        console.log(err);
    }
})

app.get("/api/getDetails",(req,res)=>{
    var db=mongoose.connection
    if(session["name"]!=null){
    try{
        var user = db.collections["User"].find({
            username:session["name"]
        })
        user.toArray(function(err,results){
            if (results.length>0){
                //console.log(results)
                res.send(results[0]);
            }
        });

    }catch(err){
        res.send("error")
    }
}
else{
    res.send("error")
}
})

app.get("/api/getArticles",(req,res)=>{
    var db=mongoose.connection
    if(session["name"]!=null){
    try{
        var user = db.collections["Articles"].find({
            
        }).sort({date:-1})
        user.toArray(function(err,results){
            if (results.length>0){
                //console.log(results)
                res.send(results);
            }
        });

    }catch(err){
        res.send("error")
    }
}
else{
    res.send("error")
}
})

app.post("/api/addArticle",(req,res)=>{
    function getreq(){
        return req.query
    }
    var db=mongoose.connection;
    //console.log(db);
    try{
        const article = Articles.create({
            author: getreq().author,
            date: new Date(),
            title:getreq().title,
            content:getreq().content
        })
        res.send('done')
        
        
    }catch(err){
        console.log(err);
        res.send('no')
    }
})

app.get("/api/Logout",(req,res)=>{
    session["name"]=null;
    res.send("done")
})

app.listen(1337,()=>{
    console.log("Server started on port 1337")
})