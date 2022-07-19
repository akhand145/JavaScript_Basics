'use strict';

var dbConn = require('./../../config/db.config');

// Find all the Data:
exports.findAll = (result) => {

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
exports.findById = (id, result) => {

    dbConn.query("Select * from employees where id = ? ", id, (err, res) => {
        if(err)  {
            console.log("Error while fetching by id", err);
            return result(null , err);
        }
        else {
            console.log(res);
            return result(null , res);
        }
    });
};


// Create the Data:
exports.create = (data, result) => {

    dbConn.query("INSERT INTO employees SET ?", data, (err, res) => {
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
exports.update = (id, emp_update, result) => {

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
exports.delete = (id, result) => {
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

