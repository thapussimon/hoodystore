//This route is responsible for the Shop Page

//This is our homepage
//This middleware handles the homepage route

const express=require('express');
//Mini pluggable app created using express Router
const router=express.Router();
const path=require('path');

router.get('/',(req,res,next)=>{
    console.log("In Shop Page");
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
    
});

module.exports=router;