var express = require('../config/express')();
var http = require('supertest')(express);

describe('#ProdutosController', function () {
    it('listagem json', function (done) {
        http.get('/produtos')
            .set('accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done);

    });
});

