var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function () {
    it('listagem json', function (done) {
        request.get('/produtos')
            .set('accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done);

    });

    it('#Cadastrar um novo protudo com dados invalidos', (done) => {
        request.post('/produtos')
            .send({titulo : "", descricao: "novo livro"})
            .expect(400, done);
    });

        it('#Cadastrar um novo protudo com dados validos', (done) => {
        request.post('/produtos')
            .send({titulo : "titulo",preco: 20.21, descricao: "novo livro"})
            .expect(302, done);
    });
});

