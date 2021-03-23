//This route is responsible for the Shop Page

//This is our homepage
//This middleware handles the homepage route

const express=require('express');
//Mini pluggable app created using express Router
const router=express.Router();

router.get('/',(req,res,next)=>{
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

module.exports=router;