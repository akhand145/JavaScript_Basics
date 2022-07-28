'use strict';
const mysql = require('mysql');

// connection pool
const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'crud2',
    debug : false
});


pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Database Connected at ID ${connection.threadId}`);
});

module.exports = pool;
