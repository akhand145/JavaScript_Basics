'use strict';

const Employee = require('../models/employee.model');

// findAll employee data:
exports.findAll = (req, res) => {

    Employee.findAll((err, employee) => {

        if (err) 
        res.send(err);
        console.log('All Employee data', employee);
        res.json(employee);
    });
};


// findById employee data:
exports.findById = (req, res) => {

    Employee.findById(req.params.id, (err, employee) => {

        if (err)
        res.send(err);
        console.log('Single Employee data', employee);
        res.json(employee);
    });
};


// create employee data:
exports.create = (req, res) => {    

    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(400).send({success: false, message : 'Please provide all fields'});

    } else {
        Employee.create(req.body, (err, employee) => {
            if (err) 
            res.send(err);
            res.json({ status: true, message: "Employee Created successfully!", data: employee});
        });
    }
};


// update employee data:
exports.update = (req, res) => {
    
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {

        res.status(400).send({ success: false, message: 'Please provide all required fields'});
    }
    else {
        Employee.update(req.params.id, req.body, (err, emp_update) => {
            if (err)
            res.send(err);
            res.json({ status: true, message: 'Employee Updated successfully', data: emp_update });
        });
    }
};


// delete employee data:
exports.delete = (req, res) => {

    Employee.delete(req.params.id, (err, employee) => {

        if (err)
        res.send(err);
        res.json({ status: true, message: 'Employee deleted successfully'});
    });
};

