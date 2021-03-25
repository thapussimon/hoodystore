//This route is used to add the products=> hoodies

//This is our middleware for the Product Page
//This middleware handles the add-products route
//This is where the admin of the site adds new products
const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../utils/path');


//dividing our routes => into controllers which ineracts with views & models
const productsController=require('../controllers/products');

router.get('/add-products',productsController.getAddProducts);

router.post('/products',productsController.postAddProducts);

module.exports=router;
