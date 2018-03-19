var http = require('http');

describe('ProdutosController', function(){
    it('listagem json', function(){
        var configuracao = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers : {
                'accept': 'application/json'
            }
        };
        http.get(configuracao, (res)=>{
            if(res.statusCode == 200) console.log('status ta ok');
            if(res.headers['content-type'] == 'application/json; charset=utf-8') console.log('content type ok');
        });
    
    });
});

