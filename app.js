const http=require('http');
const express=require('express');


//Creating the express app
const app=express();
//By default our express app does not parse data
//To parse data we use another module called body-parser
//This body-parser cannot parse all kinds of data, its ok for form data
const bodyParser=require('body-parser');
//We need need to setup a middleware which parses the data from the form
app.use(bodyParser.urlencoded({extended:false}));

//This is our middleware for the Product Page
//This middleware handles the add-products route
//This is where the admin of the site adds new products
app.use('/add-product',(req,res,next)=>{
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

app.post('/product',(req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

//This is our homepage
//This middleware handles the homepage route
app.get('/',(req,res,next)=>{
    console.log("In Shop Page");
    const html=`
    <html>
    <head>
    <title>Hoody Store</title>
    </head>
    <body>
    <h1>Welcome to hoody Store</h1>
    </body>
    </html>
    `;
    res.send(html);
});
app.listen(3000);