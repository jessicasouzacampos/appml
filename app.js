
console.log('node js hello');
var client_id = 5510246085077562 ;
var client_secret = "iat9OlolnICjSur4u0JOFCIFV9Js56Iv";
var seller_id = "428555048";
var access = "APP_USR-5510246085077562-042011-c9746c763a385852674fb2a21a4518f3-428555048";
var req = require('request');
var fs = require("fs");
var meli = require('mercadolibre');

var mongodb = require('mongodb').MongoClient;


var meliObject = new meli.Meli(client_id, client_secret, access);

var data = {
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
};
//#region jsonlist
var jsonlist = [{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},

{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},

{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},

{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},
{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
},{
    "title":"Item de Teste – Por favor, NÃO OFERTAR!",
    "category_id":"MLB1265",
    "price":10,
    "currency_id":"BRL",
    "available_quantity":1,
    "listing_type_id": "gold",
    "condition":"new",
    
    "pictures":[
      {"source":"http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg"}
    ]
}];

//#endregion

//AddList();
AddProdutoMeli();

 function GetUserTeste(){
    var uri = "https://api.mercadolibre.com/users/test_user?access_token="+access;
    console.log('GetUserTeste: URI :'+ uri);
    var options = {
        uri: uri,
        method: 'POST',
        json: {
            "site_id":"MLB"
        }
      }; 
    req.post(options,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(body){
            console.log('body')
            console.log('body'+JSON.stringify(response));     
        }
        if(response){
            console.log('response'+JSON.stringify(response));       
        
        }    
    }) ;
 }
function GetByNickName(){
    console.log('GetByNickName');
    var uri = "https://api.mercadolibre.com/sites/MLA/search?nickname=";
    var nickname = "JSCDISTRIBUIDORA";
    req.get(uri+nickname,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(response){
            console.log('response');       
            var ret = JSON.parse(response.body);
            console.log(ret);
        }    
    });  

}
function GetUser(){
    var uri = "https://api.mercadolibre.com/users/313689350/";
    console.log('GetUser');
    req.get(uri,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(response){
            console.log('response');       
            var ret = JSON.parse(response.body);
            console.log(response.body);
        }    
    });  
}
function GetUseMe(){
    var uri = "https://api.mercadolibre.com/users/JSCDISTRIBUIDORA /";
    console.log('GetUser');
    req.get(uri,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(response){
            console.log('response');       
            var ret = JSON.parse(response.body);
            console.log(response.body);
        }    
    });  
}
function GetCategorias(){
    var uri = "https://api.mercadolibre.com/sites/MLA/categories";
    console.log('GetCategorias');
    req.get(uri,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(response){
            console.log('response');
            var ret = JSON.parse(response.body);
            console.log(response.body);
        }    
    });  
}

function GetItemDetail(codItem){
    var uri = "https://api.mercadolibre.com/items/"+codItem+"?access_token="+access;
    console.log('GetItemDetail: '+codItem);
    req.get(uri,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(response){
            console.log('response');       
            var ret = JSON.parse(response.body);
            console.log(response.body);
                 
            mongodb.connect("mongodb://localhost:27017/appmldatabase", function (err, db) {
   
                if(err) {
                    throw err;

                }else{
                    console.log('deu certo:')
                    var dbo = db.db("appmldatabase");
                    dbo.collection("Produtos").insertOne(ret, function(err, res) {
                        if (err) throw err;
                        console.log(" document inserted");
                        db.close();
                    });
                }
               
                        
            });
            
        }    
    }); 
}
function GetAllItemsBySellerId(){
    var offset = 0;
    var limit = 200;
    var uri = "https://api.mercadolibre.com/users/"+seller_id+"/items/search?&offset="+offset+"&limit="+limit+"&access_token="+access;
    
    console.log(access);
    console.log('GetAllItems: URI :'+ uri);    
    req.get(uri,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(response){
            
            console.log('response:'+response.statusCode);       
            if(response.statusCode == 200){
                var ret = JSON.parse(response.body);            

                ret.results.forEach(el => {
                    GetItemDetail(el);
                });
            }else{
                console.log("Erro - status code :"+ response.statusCode);
            }
            
            
        }    
    }); 
}

function AddAnuncio(){
       
    var uri = "https://api.mercadolibre.com/items/validate?access_token="+access;
    console.log('AddAnuncio: URI :'+ uri); 
    var options = {
        path: uri,     
        method: 'POST',
        json: data,
        headers: {
            'Content-Type': 'application/json',
        }
      }; 
    req(options,(error, response, body) =>{
        if(error){
            console.log('error');
        }
        if(body){
            console.log('body')
            console.log('body'+JSON.stringify(response));     
        }
        if(response){
            var resp = JSON.stringify(response);
            console.log('response:'+resp.error);       
        
        }    
    }) ;
}

function ValidaProdutoMeli(){
       
    var uri = "/items/validate";
    console.log('AddAnuncio: URI :'+ uri); 

    meliObject.post(uri,data,[access],(error, response) =>{
        if(error){
            console.log('error');
        }
        
        if(response){
            var resp = JSON.stringify(response);
            console.log('response:'+resp);       
        
        }    
    }) ;
}

function AddProdutoMeli(){
       
    var uri = "/items?";
    console.log('AddAnuncio: URI :'+ uri); 

    
    meliObject.post(uri,data,[access],(error, response) =>{
        if(error){
            console.log('error:'+JSON.parse(error));
        }
        
        if(response){
            console.log('response:'+response);    
            var resp = JSON.stringify(response);
            console.log('response:'+resp);       
        
        }    
    }) ;
}

function ConverteArquivo(){
    var jsonData;
    fs.readFile("./json_models/produtos_basicos.json" , "utf8", function(err, data){
        if(err){
        return console.log("Erro ao ler arquivo");
        }
        
        jsonData = data; // faz o parse para json  
    /**
        Se precisar em array use:
        jsonData = Object.keys(jsonData);
    / */
    });
    return jsonData;
}


function AddList(){
       
    var uri = "/items";
    console.log('AddAnuncio: URI :'+ uri); 
    
   


    jsonlist.forEach(element => {
        meliObject.post(uri,element,[access],(error, response) =>{
            if(error){
                console.log('error:'+error);
            }
            
            if(response){
                var resp = JSON.stringify(response);
                console.log('response:'+resp);       
            
            }    
        }) ;
    
    });
    
}

/**var dbo = db.db("appmldatabase");
            var query = { available_quantity:15 };
            dbo.collection("Produtos").find(query).toArray(function(err, result) {
                if (err) throw err;                
                data = result;
                data.id = "";
                db.close();

                meliObject.post(uri,data,[access],(error, response) =>{
                    if(error){
                        console.log('error');
                    }
                    
                    if(response){
                        console.log('ok inseri lá:'+JSON.parse(response));

                    }    
                    }) ;
            }); */