'use strict';

const Employee = require('../models/employee.model');

// findAll employee data:
exports.findAll = (req, res) => {

    Employee.findAll((err, result) => {

        if (err) 
        res.send({ status: "failure", message: err });
        console.log('All Employee data', result);
        res.json({ status: "success", res: result });
    });
};


// findById employee data:
exports.findById = (req, res) => {

    Employee.findById(req.params.id, (err, result) => {
        // console.log(employee)
        if (err)
        res.send({ status: "failure", message: err });
        else {
            if(result.length == 0) res.json({ status: "failure", res: "Not found!"});
            else res.json({ status: "success", res: result });
            }
    });
};


// create employee data:
exports.create = (req, res) => {    

    // check null
    if(Object.keys(req.body).length === 0) {

        res.status(400).send({success: false, message : 'Please provide all fields'});

    } else {
        Employee.create(req.body, (err, result) => {
            if (err) 
            res.send({ status: "failure", message: err });
            res.json({ status: true, message: "Employee Created successfully!", data: result});
        });
    }
};


// update employee data:
exports.update = (req, res) => {
    
    // check null
    if(Object.keys(req.body).length === 0) {

        res.status(400).send({ success: false, message: 'Please provide all required fields'});
    }
    else {
        Employee.update(req.params.id, req.body, (err, result) => {
            if (err)
            res.send({ status: "failure", message: err });
            res.json({ status: true, message: 'Employee Updated successfully', data: result });
        });
    }
};


// delete employee data:
exports.delete = (req, res) => {

    Employee.delete(req.params.id, (err, result) => {

        if (err)
        res.send({ status: "failure", message: err });
        res.json({ status: true, message : 'Employee Deleted Successfully' });
    });
};

