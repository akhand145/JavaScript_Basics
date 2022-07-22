'use strict';

const postModel = require('../models/post.model');

// findAll post data:
exports.findAll = (req, res) => {

    postModel.findAll((err, result) => {
        if (err)
        res.send({ status : "Error while fetching posts", message : err });
        else
        res.json({ status : "Posts fetched successfully", message : result });
    });
}

// findById post data:
exports.findById = (req, res) => {

    postModel.findById(req.params.id, (err, result) => {
        if (err)
        res.send({ status : "Error while fetching posts", message : err });
        else {
            if(result.length == 0)
            res.json({ status : "failure", message : "Not found!" });
            else
            res.json({ status : "Post fetched successfully", message : result })
        }
    });
}


// Create post data:
exports.create = (req, res) => {

    if(Object.keys(req.body).length === 0) {
        res.status(400).send({ success : false, message : "Please provide all fields" });
    } else {
        postModel.create(req.body, (err, result) => {
            if (err)
            res.send({ status : "Error while creating post", message : failure });
            else
            res.json({ status : "User Created successfully", message : result, data : result });
        });
    }
}


// Update post data:
exports.update = (req, res) => {

    if(Object.keys(req.body).length === 0) {
        res.status(400).send({ success : false, message : "Please provide all fields" });
    } else {
        postModel.update(req.params.id, req.body, (err, result) => {
            if (err)
            res.send({ status : "Error while updating post", message : failure });
            else
            res.json({ status : "Post Updated successfully", message : result, data : result });
        });
    }
}


// Delete post data:
exports.delete = (req, res) => {

    postModel.delete(req.params.id, (err, result) => {
        if (err)
        res.send({ status : "Error while Deleting post", message : err });
        else
        res.json({ status : "Post Deleted Successfully", message : result });
    });
}

