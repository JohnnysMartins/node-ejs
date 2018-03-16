var http = require('http');

var configuracao = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers : {
        'accept': 'application/json',
        'content-type': 'application/json'
    }
};

var client = http.request(configuracao, (res) => {
    console.log(res.statusCode);
    res.on('data', (body) => {
        console.log(`corpo => ${body}`)
    });
});

var produto = {
    titulo: '',
    descricao: 'Node e js com um pouco de http',
    preco: 100
};

client.end(JSON.stringify(produto));
