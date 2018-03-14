var http = require('http');

var configuracao = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers : {
        'accept': 'application/json'
    }
};

http.get(configuracao, (res) => {
    console.log(res.statusCode);
    res.on('data', (body) => {
        console.log(`corpo => ${body}`)
    });
});