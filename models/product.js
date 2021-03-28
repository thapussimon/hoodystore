const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/path');


module.exports=class Product{
    ///Our class is the Product, where we store individual product(hoodies)
    //need to create an object for the Product class & pass the form data to it
    constructor(t){
        this.title=t;
    }
    //The save method is responsible to store the data from the form
    save(){
        const p=path.join(rootDir,'data','products.json');
        //CHecking whether the file is there
        fs.readFile(p,(err,fileContent)=>{
            let products=[];
            //if the file is not there we convert the filecontent into a js object
            if(!err){
                products=JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>console.log(err));

        })

    }
    
    //tHIS IS NON BLOCKING ASYNC CODE
    //THE CALLBACK WOULD FIRE AFTER THE FILE CONTENT IS COMPLETELY READ
    //I have used a callback here since readFile method is async in nature 
    //& would not return anything by default
    //so we need to attack it when the file is completely read, so I used a callback for this 
    static fetchAll(cb){
        const p=path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([])
            }
            cb(JSON.parse(fileContent))
        })
    }

}