// Table Creation 

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected");
    var sql = "CREATE TABLE employees(id INT PRIMARY KEY,name VARCHAR(255),age INT(3),city VARCHAR(255))";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table Created");
    });
});


// Alter Table

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected");
    var sql = "ALTER TABLE employees ADD COLUMN salary INT(10)";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table Altered");
    });
});


// Insertion Record with multiple values

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    console.log("Connected");
    var sql = "INSERT INTO employees(id,name,age,city)VALUES('1','Akhand','26','Lucknow'),('2','SS','25','Lucknow'),('3','SP','24','Lucknow'),('4','Jaiki','27','Lucknow'),('5','Ayush','25','Lucknow')";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("5 record inserted");
    });
});


// Update Record

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    var sql = "UPDATE employees SET city = 'Noida' WHERE city = 'Lucknow'";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Records Updated");
    });
});


// Delete Record

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    var sql = "DELETE FROM employees WHERE city = 'Lucknow'";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Records Deleted");
    });
});


// Select All Records

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * from employees", function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});


// Select Unique - Where Clause

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM employees where id = '4'", function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});


// Retreive a unique data

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM employees where name LIKE 'S%'", function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});


// DROP Table

var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "appventurez"
});
con.connect(function(err) {
    if(err) throw err;
    var sql = "DROP TABLE employees";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table Deleted");
    });
});