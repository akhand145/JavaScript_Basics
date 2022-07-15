'use strict';
const mysql = require('mysql');

// local mysql db connection
const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'crud_api'
});

dbConn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected");
});

module.exports = dbConn;

