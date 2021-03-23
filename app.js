const http=require('http');
const express=require('express');


//Creating the express app
const app=express();

app.use('/add-product',(req,res,next)=>{
    console.log("In Add Product Page");
    const html=`
        <html>
        <head>
        <title>Add Hoodies</title>
        </head>
        <body>
        <h1>Welcome to Hoody Store</h1>
        </body>
        </html>
    `;

    res.send(html);
});

app.use('/',(req,res,next)=>{
    console.log("In Shop Page");
    const html=`
    <html>
    <head>
    <title>Hoody Store</title>
    </head>
    <body>
    <form action="/add-product" method="POST">
    <label for="title">Hoody Name</label>
    <input type="text" name="title" id="title">
    <button type="submit">Add Hoody </button>
    </form>
    </body>
    </html>
    `;
    res.send(html);
});
app.listen(3000);