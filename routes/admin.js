//This route is used to add the products=> hoodies

//This is our middleware for the Product Page
//This middleware handles the add-products route
//This is where the admin of the site adds new products
const express=require('express');
const router=express.Router();
const path=require('path');

router.use('/add-product',(req,res,next)=>{
    console.log("In Add Product Page");
   res.sendFile(path.join(__dirname,'..','views','add-products.html'));
    
});

router.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

module.exports=router;