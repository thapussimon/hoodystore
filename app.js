const http=require('http');
const express=require('express');

const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const path=require('path');
const rootDir=require('./utils/path');



//Creating the express app
const app=express();
//By default our express app does not parse data
//To parse data we use another module called body-parser
//This body-parser cannot parse all kinds of data, its ok for form data
const bodyParser=require('body-parser');
//We need need to setup a middleware which parses the data from the form
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','pug');
app.set('views',path.join(rootDir,'views','templates'));

app.use(express.static(path.join(rootDir,'public')));

app.use(adminData.router);
app.use(shopRoutes);

app.use('/',(req,res,next)=>{
    // res.status(402).sendFile(path.join(rootDir,'views','404.html'));
    res.status(404).render('error',{pageTitle:"Error"});
});


app.listen(3000);