'use strict';

const userModel = require('../models/user.model');

// findAll user data:
exports.findAll = (req, res) => {
    
    userModel.findAll((err, result) => {
        if (err)
        res.send({ status : "Error while fetching users", message : err });
        else
        res.json({ status : "Users fetched successfully", message : result });
    });
}

// findById user data:
exports.findById = (req, res) => {

    userModel.findById(req.params.id, (err, result) => {
        if (err)
        res.send({ status : "Error while fetching users", message : err });
        else {
            if(result.length == 0)
            res.json({ status : "failure", message : "Not found!"});
            else
            res.json({ status : "Post fetched successfully", message : result })
        }
    });
}


// create user data:
exports.create = (req, res) => {

    if(Object.keys(req.body).length === 0) {
        res.status(400).send({ success : false, message : "Please provide all fields" });
    } else {
        userModel.create(req.body, (err, result) => {
            if (err)
            res.send({ status : "Error while Creating user", message : err });
            else
            res.json({ status : "User Created Successfully", message : result, data : result });
        });
    }
}


// update user data:
exports.update = (req, res) => {

    if(Object.keys(req.body).length === 0) {
        res.status(400).send({ success : false, message : "Please provide all required fields" });
    } else {
        userModel.update(req.params.id, req.body, (err, result) => {
            if (err)
            res.send({ status : "Error while Updating user", message : err });
            else
            res.json({ status : "User Updated Successfully", message : result, data : result });
        });
    }
}


// delete user data:
exports.delete = (req, res) => {

    userModel.delete(req.params.id, (err, result) => {
        if (err) 
        res.send({ status: "Error while Deleting user", message: err })
        else
        res.json({ status: "User Deleted Successfully", message: result, data : result });
    });
}

