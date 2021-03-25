const products=[];
exports.getAddProducts=(req,res,next)=>{
    console.log("In Add Product Page");
//    res.sendFile(path.join(rootDir,'views','add-products.html'));
    res.render('add-products',{pageTitle:"Add Products"});
    
};

exports.postAddProducts=(req,res,next)=>{
    // console.log(req.body.title);
    products.push(req.body.title);
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>{
    console.log("In Shop Page");
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop',{prods:products,pageTitle:"Shop"});
    
};
