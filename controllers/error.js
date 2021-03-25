exports.get404=(req,res,next)=>{
    // res.status(402).sendFile(path.join(rootDir,'views','404.html'));
    res.status(404).render('error',{pageTitle:"Error"});
};
