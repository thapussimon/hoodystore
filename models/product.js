const products=[];

module.exports=class Product{
    ///Our class is the Product, where we store individual product(hoodies)
    //need to create an object for the Product class & pass the form data to it
    constructor(t){
        this.title=t;
    }
    //The save method is responsible to store the data from the form
    save(){
        products.push(this);
    }
    
    static fetchAll(){
        return products;
    }

}