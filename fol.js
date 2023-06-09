const express=require('express');
const app=express();

const bodyparser=require('body-parser');
app.arguments(bodyparser.urlencoded({extended:true}));

app.listen(4000,function(){
    console.log("new file started.. .. .. .. ..");
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/fol.html");
});

app.post("/",function(req,res){
    res.send("changes done");
});
