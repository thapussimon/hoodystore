//This route is used to add the products=> hoodies

//This is our middleware for the Product Page
//This middleware handles the add-products route
//This is where the admin of the site adds new products
const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../utils/path');
const products=[];

router.use('/add-products',(req,res,next)=>{
    console.log("In Add Product Page");
//    res.sendFile(path.join(rootDir,'views','add-products.html'));
    res.render('add-products',{pageTitle:"Add Products"});
    
});

router.post('/products',(req,res,next)=>{
    // console.log(req.body.title);
    products.push(req.body.title);
    res.redirect('/');
});

exports.router=router;
exports.products=products;
