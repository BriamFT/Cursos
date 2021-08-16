const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products'
});

mysqlConnection.connect(function (e){
    if(e){
        console.log(e);
        return;
    }else{
        console.log('DB is connected');
    }
});

module.exports = mysqlConnection;