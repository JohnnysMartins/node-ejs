var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'toor',
        database: 'node_ejs'
    });
}

module.exports = function() {
    return createDBConnection;
}
