'use strict';

var dbConn = require('./../../config/db.config');

// employee object create
var Employee = function(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.salary = employee.salary;
};


// Find all the Data:

Employee.findAll = (result) => {

    dbConn.query("Select * from employees", (err, res) => {
        if(err) {
            console.log("Error while fetching employees", err);
            result(null, err);
        }
        else {
            console.log('Employees fetched successfully', res);
            result(null, res);
        }
    });
};


// Find the Data by Id:

Employee.findById = (id, result) => {

    dbConn.query("Select * from employees where id = ? ", id, (err, res) => {
        if(err)  {
            console.log("Error while fetching by id", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


// Create the Data:

Employee.create = (newEmp, result) => {

    dbConn.query("INSERT INTO employees SET ?", newEmp, (err, res) => {
        if(err) {
            console.log("Error while inserting data", err);
            result(null, err);
        }
        else {
            console.log("Employee Created successfully");
            result(null, res);
        }
    });
};


// Update the Data: 

Employee.update = (id, emp_update, result) => {

    dbConn.query("UPDATE employees SET ? WHERE id = ?", 
    [emp_update, id],
    (err, res) => {

        if(err) {
            console.log("Error while updating the data");
            result(null, err);
        } else {
            console.log("Employee Updated successfully");
            result(null, res);
        }
    });
};


// Deleted Data Forcefully:

Employee.delete = (id, result) => {
    dbConn.query("Delete from employees WHERE id = ?", [id], (err, res) => {
        if(err) {
            console.log("Error while deleting data", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });


// Deleted Data softly:

    // dbConn.query("UPDATE employees SET is_deleted = ? WHERE id = ?", 
    // [1, id],
    // (err, res) => {

    //     if(err) {
    //         console.log("Error while deleting the data", err );
    //         result(null, err);
    //     } else {
    //         console.log("Employee Deleted successfully");
    //         result(null, res);
    //     }
    // });

};


module.exports = Employee;
