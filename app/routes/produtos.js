module.exports = function (app) {

    var listaProdutos = function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            res.format({
                html: () => {
                    res.render('produtos/lista', { lista: results });
                },
                json: () => {
                    res.json({ produtos: results });
                }
            });

        });

        connection.end();
    }

    app.get('/', (req, res) => {
        res.redirect('/produtos');
    });

    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form', { errosValidacao: {}, produto: {} });
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;
        req.assert('titulo', 'O titulo é obrigatorio').notEmpty();
        req.assert('preco', 'O valor deve ser numerico').isFloat();
        var erros = req.validationErrors();
        if (erros) {
            res.status(400);
            res.format({
                html: () => {
                    res.render('produtos/form', { errosValidacao: erros, produto: produto });
                },
                json: () => {
                    res.json({ erros });
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function (err, results) {
            res.redirect('/produtos');
        });

        connection.end();
    });
}
