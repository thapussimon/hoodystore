const http=require('http');
const express=require('express');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

//Creating the express app
const app=express();
//By default our express app does not parse data
//To parse data we use another module called body-parser
//This body-parser cannot parse all kinds of data, its ok for form data
const bodyParser=require('body-parser');
//We need need to setup a middleware which parses the data from the form
app.use(bodyParser.urlencoded({extended:false}));


app.use(adminRoutes);
app.use(shopRoutes);


app.listen(3000);