//This route is used to add the products=> hoodies

//This is our middleware for the Product Page
//This middleware handles the add-products route
//This is where the admin of the site adds new products
const express=require('express');
const router=express.Router();

router.use('/add-product',(req,res,next)=>{
    console.log("In Add Product Page");
    const html=`
    <html>
    <head>
    <title>Hoody Store</title>
    </head>
    <body>
    <form action="/product" method="POST">
    <label for="title">Hoody Name</label>
    <input type="text" name="title" id="title">
    <button type="submit">Add Hoody </button>
    </form>
    </body>
    </html>
    `;

    res.send(html);
});

router.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

module.exports=router;