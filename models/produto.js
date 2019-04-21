class Produto {
    
    constructor(titulo, descricao, condicao, quantidade_disponivel, 
        categoria_id, imagens, preco, moeda, tipo_ ) 
    {        
        this.title = titulo;
        
        this.condition = condicao;
        this.available_quantity = quantidade_disponivel;
        this.category_id = categoria_id;
        this.pictures = imagens;
        this.price = preco;
        this.listing_type_id = lista
        this.currency = moeda;
        
        Object.freeze(this);
    }
    /** "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ] */


    //*    
    get title() {
        
        return this.title;
    }
        
    get description() {
        
        return this.description;
    }
    
    //*
    get condition() {
        
        return this.condition;
    }
    
    get available_quantity() {
        
        return this.available_quantity;
    }

    //*
    get category_id() {
        
        return this.category_id;
    }

    get pictures() {
        
        return this.pictures;
    }

    //*
    get price() {
        
        return this.price;
    }

    
    //*
    get currency() {
        
        return this.currency;
    }
}