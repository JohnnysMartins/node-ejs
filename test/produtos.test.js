var http = require('http');

var configuracao = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'accept': 'application/json'
    }
};
describe('#ProdutoController', () => {
    it('#Listagem json', () => {
        console.log('Teste de verificacao de listagem json');
    });
});