module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.format({
                html: () => {
                    res.render('produtos/lista', {lista: results});
                },
                json: () => {
                    res.json({produtos: results});
                }
            });
            
        });

        connection.end();
    }

    app.get('/',(req, res) => {
        res.redirect('/produtos');
    });
    
    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res) {
        var produto = req.body;
        console.log(produto);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results) {
            console.error(err);
            res.redirect('/produtos');
        });

        connection.end();
    });
}
