'use strict';

var dbConn = require('./../../config/db.config');

// employee object create
var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.salary = employee.salary;
};

Employee.create = function (newEmp, result) {
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Employee.findAll = function (result) {

    dbConn.query("Select * from employees", function (err, res) {
        if(err) {
            console.log("error: ", err);
        }
        else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Employee.findById = function (id, result) {

    dbConn.query("Select * from employees where id = ? ", function (err, res) {
        if(err)  {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Employee;