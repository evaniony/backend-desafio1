class ProductManager{
    constructor(){
        this.products = [];
    }
    getProducts(){
        console.log(this.products);
        return this.products;
    }
    getProductById(id){
        const found = this.products.find((e)=> e.id == id);
        if(found){
        return found;
        }else{
            console.log("Not found");
            return undefined;
        }
    }
    #getId(){
        let init = 0;
        for(let i = 0; i < this.products.length; i++){
            //incrementa y agrega;
            const e = this.products[i];
            if(e.id > init){
                init = e.id;
            }
        }
        return ++init;
    }
    addProducts(title, description, price, thumbnail, code, stock, id){
        //por favor, corregir esta parte:
        const exist = this.products.find((e)=> e.title == this.products.title);
        if(exist){
            console.log("this product is in the product list");
        }else{
        const newProd = {title, description, price, thumbnail, code, stock, id: this.#getId()};
        this.products = [...this.products, newProd];
        }
    }
}

const list = new ProductManager();
list.addProducts("Maceta","Maceta de ceramica", 3500, "https://i.pinimg.com/564x/6b/8f/92/6b8f92b98b8d7f73c16b1a88b28b8c6b.jpg", 1020, 10);
list.addProducts("Taza","Taza de ceramica", 2000, "https://i.pinimg.com/564x/7c/4b/eb/7c4bebe5532e38a88bb39008059102d9.jpg", 1022, 15);
list.addProducts("Taza","Taza de ceramica", 2000, "https://i.pinimg.com/564x/7c/4b/eb/7c4bebe5532e38a88bb39008059102d9.jpg", 1022, 15);


//all products;
console.log(list.products);
//found!
//const found = list.getProductById(1);
//console.log(found);
//not found;
//const exist = list.getProductById(3);
//console.log(found);