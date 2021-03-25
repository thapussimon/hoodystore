//This route is responsible for the Shop Page

//This is our homepage
//This middleware handles the homepage route

const express=require('express');
//Mini pluggable app created using express Router
const router=express.Router();
//Since I do not need path module again
const path=require('path');


const productsController=require('../controllers/products');

router.get('/',productsController.getProducts);

module.exports=router;