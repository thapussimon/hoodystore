
const Product=require('../models/product');

exports.getAddProducts=(req,res,next)=>{
    console.log("In Add Product Page");
//    res.sendFile(path.join(rootDir,'views','add-products.html'));
    res.render('add-products',{pageTitle:"Add Products"});
    
};

exports.postAddProducts=(req,res,next)=>{
    // console.log(req.body.title);
    // products.push(req.body.title);
    //Here we need to create an object for the Product class model
    //And pass the form data to it
    const product=new Product(req.body.title);
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>{
    console.log("In Shop Page");
    const products=Product.fetchAll();
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop',{prods:products,pageTitle:"Shop"});
    
};
