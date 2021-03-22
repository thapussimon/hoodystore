const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/' && method==="GET"){
        res.setHeader('Content-Type','text/html');
        const html=`
        <html>
        <body>
        <form action="/add-product" method="POST">
        <label for="title">Hoody Name</label>
        <input type="text" name="title" id="title">
        <button type="submit">Add Hoody</button>
        </form>
        </body>
        </html>
        
        `;
        res.write(html);
        return res.end();
        
    }
    if(url==="/add-product" && method==="POST"){
        const body=[];
        req.on('data',chunks=>{
            body.push(chunks);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString().split("=");
            fs.writeFileSync('hoodies.txt',parsedBody[1]);
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
        });
        
    }
});

server.listen(3000);
