const http=require('http');
const express=require('express');


//Creating the express app
const app=express();

app.use((req,res,next)=>{
    console.log("In middleware");
});

app.listen(3000);