const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("In Event Loop");
});

server.listen(3000);
