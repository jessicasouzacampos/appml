
/*var InformacoesAcesso = require('./models/InformacoesAcesso');
var Access = require('./Access');*/

var client_id = '1861667424044717 ';
var client_secret = "RBFnTI48xvOm31jlLKtWkLp4dT6u9ki5";
var seller_id = "303962229";
var access = "APP_USR-1861667424044717-050115-cfc7a1cfd6d1c765bbe7b7964accb236-303962229";

var req = require('request');
var fs = require("fs");
var meli = require('mercadolibre');
var mongodb = require('mongodb').MongoClient;

var urlDB = "mongodb://localhost:27017/appmldatabase";
var i = 0;
var meliObject = new meli.Meli(client_id, client_secret, access);
var usuarios = [
  {
    "id": 313689350,
    "nickname": "JSCDISTRIBUIDORA",
    "registration_date": "2018-04-10T08:34:25.000-04:00",
    "first_name": "Miria Maria",
    "last_name": "de Souza Campos",
    "gender": "F",
    "country_id": "BR",
    "email": "distribuidorajsc@hotmail.com",
    "identification": {
      "number": "15196740000112",
      "type": "CNPJ"
    },
    "internal_tags": [
      "developer"
    ],
    "address": {
      "address": "CAIXA POSTAL 135",
      "city": "Lagoa da Prata",
      "state": "BR-MG",
      "zip_code": "35590000"
    },
    "phone": {
      "area_code": "37",
      "extension": "",
      "number": "998059980",
      "verified": false
    },
    "alternative_phone": {
      "area_code": "",
      "extension": "",
      "number": ""
    },
    "user_type": "normal",
    "tags": [
      "normal",
      "messages_as_seller",
      "messages_as_buyer"
    ],
    "logo": null,
    "points": 82,
    "site_id": "MLB",
    "permalink": "http://perfil.mercadolivre.com.br/JSCDISTRIBUIDORA",
    "shipping_modes": [
      "custom",
      "not_specified",
      "me2"
    ],
    "seller_experience": "ADVANCED",
    "bill_data": {
      "accept_credit_note": "Y"
    },
    "seller_reputation": {
      "level_id": "5_green",
      "power_seller_status": null,
      "transactions": {
        "canceled": 11,
        "completed": 780,
        "period": "historic",
        "ratings": {
          "negative": 0.03,
          "neutral": 0.05,
          "positive": 0.92
        },
        "total": 791
      },
      "metrics": {
        "sales": {
          "period": "3 months",
          "completed": 300
        },
        "claims": {
          "period": "3 months",
          "rate": 0.0165
        },
        "delayed_handling_time": {
          "period": "3 months",
          "rate": 0.0451
        }
      }
    },
    "buyer_reputation": {
      "canceled_transactions": 0,
      "tags": [],
      "transactions": {
        "canceled": {
          "paid": null,
          "total": null
        },
        "completed": null,
        "not_yet_rated": {
          "paid": null,
          "total": null,
          "units": null
        },
        "period": "historic",
        "total": null,
        "unrated": {
          "paid": null,
          "total": null
        }
      }
    },
    "status": {
      "billing": {
        "allow": true,
        "codes": []
      },
      "buy": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "confirmed_email": false,
      "shopping_cart": {
        "buy": "allowed",
        "sell": "allowed"
      },
      "immediate_payment": false,
      "list": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "mercadoenvios": "not_accepted",
      "mercadopago_account_type": "personal",
      "mercadopago_tc_accepted": true,
      "required_action": null,
      "sell": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "site_status": "active",
      "user_type": "complete_registration"
    },
    "secure_email": "jdistri.qgr36bx@mail.mercadolivre.com",
    "company": {
      "brand_name": "MIRIA MARIA DE SOUZA CAMPOS 86604074668 ",
      "city_tax_id": null,
      "corporate_name": "MIRIA MARIA DE SOUZA CAMPOS 86604074668 ",
      "identification": "15196740000112",
      "state_tax_id": "0019295930010",
      "soft_descriptor": null
    },
    "credit": {
      "consumed": 0,
      "credit_level_id": "MLB1",
      "rank": "payer"
    },
    "context": {
      "device": "web-desktop",
      "flow": "normal",
      "source": "mercadolibre"
    }
  },

  {
    "id": 428555048,
    "nickname": "TESTUGC2I9BZ",
    "registration_date": "2019-04-19T19:50:45.000-04:00",
    "first_name": "Test",
    "last_name": "Test",
    "gender": "",
    "country_id": "BR",
    "email": "test_user_47838209@testuser.com",
    "identification": {
      "number": "111111111111",
      "type": "CPF"
    },
    "internal_tags": [
      "developer"
    ],
    "address": {
      "address": "Test Address 123",
      "city": "Sao Paulo",
      "state": "BR-SP",
      "zip_code": "47807078"
    },
    "phone": {
      "area_code": "01",
      "extension": "",
      "number": "1111-1111",
      "verified": false
    },
    "alternative_phone": {
      "area_code": "",
      "extension": "",
      "number": ""
    },
    "user_type": "normal",
    "tags": [
      "normal",
      "test_user",
      "messages_as_seller"
    ],
    "logo": null,
    "points": 100,
    "site_id": "MLB",
    "permalink": "http://perfil.mercadolivre.com.br/TESTUGC2I9BZ",
    "shipping_modes": [
      "custom",
      "not_specified"
    ],
    "seller_experience": "NEWBIE",
    "bill_data": {
      "accept_credit_note": null
    },
    "seller_reputation": {
      "level_id": null,
      "power_seller_status": null,
      "transactions": {
        "canceled": 0,
        "completed": 0,
        "period": "historic",
        "ratings": {
          "negative": 0,
          "neutral": 0,
          "positive": 0
        },
        "total": 0
      },
      "metrics": {
        "sales": {
          "period": "60 months",
          "completed": 0
        },
        "claims": {
          "period": "60 months",
          "rate": 0
        },
        "delayed_handling_time": {
          "period": "60 months",
          "rate": 0
        }
      }
    },
    "buyer_reputation": {
      "canceled_transactions": 0,
      "tags": [],
      "transactions": {
        "canceled": {
          "paid": null,
          "total": null
        },
        "completed": null,
        "not_yet_rated": {
          "paid": null,
          "total": null,
          "units": null
        },
        "period": "historic",
        "total": null,
        "unrated": {
          "paid": null,
          "total": null
        }
      }
    },
    "status": {
      "billing": {
        "allow": true,
        "codes": []
      },
      "buy": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "confirmed_email": false,
      "shopping_cart": {
        "buy": "allowed",
        "sell": "allowed"
      },
      "immediate_payment": false,
      "list": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "mercadoenvios": "not_accepted",
      "mercadopago_account_type": "personal",
      "mercadopago_tc_accepted": true,
      "required_action": null,
      "sell": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "site_status": "active",
      "user_type": null
    },
    "secure_email": "ttest.lsys8c@mail.mercadolivre.com",
    "credit": {
      "consumed": 0,
      "credit_level_id": "MLB5",
      "rank": "newbie"
    },
    "context": {}
  },

  {
    "id": 303962229,
    "nickname": "FMG DISTRIBUIDORA",
    "registration_date": "2018-02-23T16:33:48.000-04:00",
    "first_name": "Miria",
    "last_name": "Souza",
    "gender": "F",
    "country_id": "BR",
    "email": "distribuidorafmg2018@gmail.com",
    "identification": {
      "number": "86604074668",
      "type": "CPF"
    },
    "internal_tags": [
      "developer"
    ],
    "address": {
      "address": "CAIXA POSTAL 135",
      "city": "Lagoa da Prata",
      "state": "BR-MG",
      "zip_code": "35590000"
    },
    "phone": {
      "area_code": null,
      "extension": "",
      "number": "37998059980",
      "verified": false
    },
    "alternative_phone": {
      "area_code": "",
      "extension": "",
      "number": ""
    },
    "user_type": "normal",
    "tags": [
      "normal",
      "messages_as_seller",
      "messages_as_buyer"
    ],
    "logo": null,
    "points": 10,
    "site_id": "MLB",
    "permalink": "http://perfil.mercadolivre.com.br/FMG+DISTRIBUIDORA",
    "shipping_modes": [
      "custom",
      "not_specified",
      "me2"
    ],
    "seller_experience": "ADVANCED",
    "bill_data": {
      "accept_credit_note": null
    },
    "seller_reputation": {
      "level_id": "5_green",
      "power_seller_status": null,
      "transactions": {
        "canceled": 3,
        "completed": 68,
        "period": "historic",
        "ratings": {
          "negative": 0,
          "neutral": 0,
          "positive": 1
        },
        "total": 71
      },
      "metrics": {
        "sales": {
          "period": "60 months",
          "completed": 68
        },
        "claims": {
          "period": "60 months",
          "rate": 0
        },
        "delayed_handling_time": {
          "period": "60 months",
          "rate": 0.0781
        }
      }
    },
    "buyer_reputation": {
      "canceled_transactions": 0,
      "tags": [],
      "transactions": {
        "canceled": {
          "paid": null,
          "total": null
        },
        "completed": null,
        "not_yet_rated": {
          "paid": null,
          "total": null,
          "units": null
        },
        "period": "historic",
        "total": null,
        "unrated": {
          "paid": null,
          "total": null
        }
      }
    },
    "status": {
      "billing": {
        "allow": true,
        "codes": []
      },
      "buy": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "confirmed_email": false,
      "shopping_cart": {
        "buy": "allowed",
        "sell": "allowed"
      },
      "immediate_payment": false,
      "list": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "mercadoenvios": "not_accepted",
      "mercadopago_account_type": "personal",
      "mercadopago_tc_accepted": true,
      "required_action": null,
      "sell": {
        "allow": true,
        "codes": [],
        "immediate_payment": {
          "reasons": [],
          "required": false
        }
      },
      "site_status": "active",
      "user_type": "complete_registration"
    },
    "secure_email": "msouza.8h9zbz@mail.mercadolivre.com",
    "credit": {
      "consumed": 0,
      "credit_level_id": "MLB1",
      "rank": "payer"
    },
    "context": {
      "device": "web-desktop",
      "flow": "normal",
      "source": "mercadolibre"
    }
  }
]
var data = {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
};
//#region jsonlist
var jsonlist = [{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},

{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},

{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},

{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
},
{
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}, {
  "title": "Item de Teste – Por favor, NÃO OFERTAR!",
  "category_id": "MLB1265",
  "price": 10,
  "currency_id": "BRL",
  "available_quantity": 1,
  "listing_type_id": "gold",
  "condition": "new",

  "pictures": [
    { "source": "http://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Cup.jpg" }
  ]
}];

//#endregion

//GetItemDetail('MLB1124754724');
GetItemDetail();

//DeleteAll();
//GetAllItemsBySellerId();


function GetItemDetail() {
  var dbo;
  mongodb.connect(urlDB, { useNewUrlParser: true })  
  .then((function(db){
    dbo = db.db("appmldatabase");
    console.log('ObterRelacoes')
    
    dbo.collection("RelacaoProdutos").find({}, function(err,body){
      if(err) throw err;
      else{
        ObterDetalhes(body,dbo);
      }
    });
   
  })); 
}

function ObterRelacoes(db){
  var rel = [];
  db.collection("RelacaoProdutos").find({}, function(err,body){
    if(err) throw err;
    else{
      rel = body;
    }
  });

  return rel;
}

function ObterDetalhes(result,db){
  console.log('ObterDetalhes')
 
  result.forEach(re =>{
    re.results.forEach(el => {       
      var uri = "https://api.mercadolibre.com/items/" + el + "?access_token=" + access;
      req.get(uri, (error, response, body) => {
        if (error) {
          throw error;
        }
        if (response) {   
          
          db.collection("Produtos").insertOne(JSON.parse(body), function (err, res) {
            if (err) throw err;         
          });
          /*
          fs.appendFile("./json_models/teste.json",body, function(err) {
            if(err) {
              throw error;
            } 
          });  */
        }
      }); 
      console.log('Produto inserido.'+i)
      i++;       
    })
    
  })   
}

function GravarProduto(db, itens){
  db.collection("Produtos").insertMany(itens, function (err, res) {
    if (err) throw err; 
    else console.log('Produto inserido.')
  });
}

function InserirUsuariosBanco() {
  mongodb.connect("mongodb://localhost:27017/appmldatabase", { useNewUrlParser: true }, function (err, db) {

    if (err) {
      throw err;

    } else {
      console.log('deu certo:')
      var dbo = db.db("appmldatabase");
      dbo.collection("Usuarios").insertMany(usuarios, function (err, res) {
        if (err) throw err;
        console.log(" document inserted");
        db.close();
      });
    }
  });
}

function DeleteAll() {
  mongodb.connect("mongodb://localhost:27017/appmldatabase", { useNewUrlParser: true }, function (err, db) {

    if (err) {
      throw err;
    } else {
      var dbo = db.db("appmldatabase");
      dbo.collection("Produtos").deleteMany({}, function (err, res) {
        if (err) throw err;
        console.log(" documentos deletados");
        db.close();
      });
    }
  });
}

function GetAllItemsBySellerId() {
  var offset = 100;
  var limit = 174;
  var uri = "https://api.mercadolibre.com/users/" + seller_id + "/items/search?&offset=" + offset + "&limit=" + limit + "&access_token=" + access;
  //var uri = "https://api.mercadolibre.com/users/"+seller_id+"/items/search?&limit="+limit+"&access_token="+access;

  console.log(access);
  console.log('GetAllItems: URI :' + uri);
  req.get(uri, (error, response, body) => {
    if (error) {
      console.log("Erro - status code :" + error.statusCode);
    }
    if (response) {

      if (response.statusCode == 200) {
        var ret = JSON.parse(response.body);

        mongodb.connect("mongodb://localhost:27017/appmldatabase", { useNewUrlParser: true }, function (err, db) {

          if (err) {
            console.log('GetItemDetail mongo error');
            throw err;
          } else {
            var dbo = db.db("appmldatabase");
            dbo.collection("RelacaoProdutos").insertOne(ret, function (err, res) {
              if (err) throw err;
              db.close();
            });
          }


        });
      } else {

      }


    }
  });
}

function AddAnuncio() {

  var uri = "https://api.mercadolibre.com/items/validate?access_token=" + access;
  console.log('AddAnuncio: URI :' + uri);
  var options = {
    path: uri,
    method: 'POST',
    json: data,
    headers: {
      'Content-Type': 'application/json',
    }
  };
  req(options, (error, response, body) => {
    if (error) {
      console.log('error');
    }
    if (body) {
      console.log('body')
      console.log('body' + JSON.stringify(response));
    }
    if (response) {
      var resp = JSON.stringify(response);
      console.log('response:' + resp.error);

    }
  });
}

function ValidaProdutoMeli() {

  var uri = "/items/validate";
  console.log('AddAnuncio: URI :' + uri);

  meliObject.post(uri, data, [access], (error, response) => {
    if (error) {
      console.log('error');
    }

    if (response) {
      var resp = JSON.stringify(response);
      console.log('response:' + resp);

    }
  });
}

function AddProdutoMeli() {

  var uri = "/items?";
  console.log('AddAnuncio: URI :' + uri);


  meliObject.post(uri, data, [access], (error, response) => {
    if (error) {
      console.log('error:' + JSON.parse(error));
    }

    if (response) {
      console.log('response:' + response);
      var resp = JSON.stringify(response);
      console.log('response:' + resp);

    }
  });
}

function ConverteArquivo() {
  var jsonData;
  fs.readFile("./json_models/produtos_basicos.json", "utf8", function (err, data) {
    if (err) {
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

function AddList() {

  var uri = "/items";
  console.log('AddAnuncio: URI :' + uri);

  jsonlist.forEach(element => {
    meliObject.post(uri, element, [access], (error, response) => {
      if (error) {
        console.log('error:' + error);
      }

      if (response) {
        var resp = JSON.stringify(response);
        console.log('response:' + resp);

      }
    });

  });

}

function GetUser() {

  var access = new Access();

  mongodb.connect("mongodb://localhost:27017/appmldatabase", { useNewUrlParser: true }, function (err, db) {
    if (err) {
      throw err;

    } else {
      var dbo = db.db("appmldatabase");
      dbo.collection("Usuarios").find({}, function (err, res) {
        if (err) throw err;
        else {
          var infA = new InformacoesAcesso("", res.id, res.nickname, res.first_name, res.last_name, res.email, res.site_id, "", "");
          console.log(infA);
        }
        db.close();
      });
    }
  });
}

function GetUserTeste() {
  var uri = "https://api.mercadolibre.com/users/test_user?access_token=" + access;
  console.log('GetUserTeste: URI :' + uri);
  var options = {
    uri: uri,
    method: 'POST',
    json: {
      "site_id": "MLB"
    }
  };
  req.post(options, (error, response, body) => {
    if (error) {
      console.log('error');
    }
    if (body) {
      console.log('body')
      console.log('body' + JSON.stringify(response));
    }
    if (response) {
      console.log('response' + JSON.stringify(response));

    }
  });
}

function GetByNickName() {
  console.log('GetByNickName');
  var uri = "https://api.mercadolibre.com/sites/MLA/search?nickname=";
  var nickname = "JSCDISTRIBUIDORA";
  req.get(uri + nickname, (error, response, body) => {
    if (error) {
      console.log('error');
    }
    if (response) {
      console.log('response');
      var ret = JSON.parse(response.body);
      console.log(ret);
    }
  });

}

function GetUserX() {
  var uri = "https://api.mercadolibre.com/users/313689350/";
  console.log('GetUser');
  req.get(uri, (error, response, body) => {
    if (error) {
      console.log('error');
    }
    if (response) {
      console.log('response');
      var ret = JSON.parse(response.body);
      console.log(response.body);
    }
  });
}

function GetUseMe() {
  var uri = "https://api.mercadolibre.com/users/JSCDISTRIBUIDORA /";
  console.log('GetUser');
  req.get(uri, (error, response, body) => {
    if (error) {
      console.log('error');
    }
    if (response) {
      console.log('response');
      var ret = JSON.parse(response.body);
      console.log(response.body);
    }
  });
}

function GetCategorias() {
  var uri = "https://api.mercadolibre.com/sites/MLA/categories";
  console.log('GetCategorias');
  req.get(uri, (error, response, body) => {
    if (error) {
      console.log('error');
    }
    if (response) {
      console.log('response');
      var ret = JSON.parse(response.body);
      console.log(response.body);
    }
  });
}


/** */