'use strict';
const mysql = require('mysql');

// local mysql db connection
// const dbConn = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'crud_api'
// });

// connection pool
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'crud_api',
    debug : false
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Database Connected at ID ${connection.threadId}`);
});

// module.exports = dbConn;
module.exports = pool;

