var http = require('http');

var configuracao = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers : {
        'accept': 'application/json'
    }
};

describe('ProdutosController', function(){
    it('listagem json', function(){
        console.log("teste de verificacao de listagem json");
    });
});

