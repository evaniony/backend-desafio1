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
    #byCode(code){
        //validar si existe, a traves de code --- return boolean
        const exist = this.products.find( e => e.code == code);
        if(exist){
            return true;
        }else{
            return false;
        }
    }
    addProducts(title, description, price, thumbnail, code, stock){
        //... los campos deben ser obligatorios;
        if((title === undefined || title === null || title === "") || (description === undefined || description === null || description === "") ||
        (price === undefined || price === null || price === "") || (thumbnail === undefined || thumbnail === null || thumbnail === "") ||
         (code === undefined || code === null || code === "" || this.#byCode(code)) || (stock === undefined || stock === null || stock === "")){
            //el producto esta en la lista;
            console.log("this product is in the product list");
        }else{
            //sino, agregar
        const newProd = {title, description, price, thumbnail, code, stock, id: this.#getId()};
        this.products = [...this.products, newProd];
        }
    }
}

const list = new ProductManager();
list.addProducts("Maceta","Maceta de ceramica", 3500, "https://i.pinimg.com/564x/6b/8f/92/6b8f92b98b8d7f73c16b1a88b28b8c6b.jpg", 1020, 10);
list.addProducts("Taza","Taza de ceramica", 2000, "https://i.pinimg.com/564x/7c/4b/eb/7c4bebe5532e38a88bb39008059102d9.jpg", 1022, 15);
list.addProducts("Plato","Plato de ceramica", 1000, "#", 1024, 20);


//all products;
console.log(list.products);
//found!
//const found = list.getProductById(1);
//console.log(found);
//not found;
//const exist = list.getProductById(3);
//console.log(found);