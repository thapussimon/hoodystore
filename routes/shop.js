//This route is responsible for the Shop Page

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