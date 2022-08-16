const userModel = require('../models/user.model');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();


// Register a new user:
exports.create = (req, res) => {

    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);
    console.log(req.body.password);

    userModel.create(req.body, (err, data) => {
        if (err) {
            return res.json({ success: false, message: "Database connection error" });
        } else {
            const jsontokenreg = sign({ data }, process.env.SECRET_KEY, { expiresIn: "1h" });

            console.log(req.body.password);
            return res.status(200).json({
                success: "Data Created Successfully",
                data, token: jsontokenreg
            });
        }
    });
}


// Login a user:
exports.login = (req, res) => {

    userModel.getUserByEmail(req.body.email, (err, data) => {
        if (err) {
            return res.json({ message: "Invalid email or password" });
        } else {
            const result = compareSync(req.body.password, data.password);
            if (result) {
                data.password = undefined;
                const jsontoken = sign({ result: data[0] }, process.env.SECRET_KEY, { expiresIn: "1h" });

                console.log(req.body.password);
                return res.status(200).json({
                    success: "Login Successfully", token: jsontoken
                });
            } else {
                return res.json({ success: 0, message: "Invalid email or password" });
            }
        }
    });
}


// getAll Registered users:
exports.getAll = (req, res) => {

    userModel.getAll((err, data) => {
        if (err) {
            return res.json({ success: false, message: "Record not found" });
        } else {
            return res.status(200).json({ success: "Users fetched successfully", data });
        }
    });
}


// get Registered user ById: 
exports.getById = (req, res) => {

    userModel.getById(req.params.id, (err, data) => {
        if (err) {
            return res.json({ success: false, message: error });
        } else {
            return res.status(200).json({ data })
        }
    });
}


// Update a Registered user:
exports.update = (req, res) => {

    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);

    userModel.update(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Data not updated" });
        } else {
            return res.status(200).json({ success: "Data Updated successfully", data: result });
        }
    });
}


// Delete a Registered user:
exports.delete = (req, res) => {

    userModel.delete(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: err });
        } else {
            return res.status(200).json({ data });
        }
    });
}



// isDeleted users getAll :
exports.deletedUsers = (req, res) => {

    userModel.deletedUsers((err, data) => {
        if (err) {
            return res.json({ success: false, message: "Record not found" });
        } else {
            return res.status(200).json({ success: "Deleted Users fetched successfully", data });
        }
    });
}


// isDeleted posts getAll :
exports.deletedPosts = (req, res) => {

    userModel.deletedPosts((err, data) => {
        if (err) {
            return res.json({ success: false, message: "Record not found" });
        } else {
            return res.status(200).json({ success: "Deleted Users fetched successfully", data });
        }
    });
}


// Show User post:
exports.showUsersList = (req, res) => {

    userModel.showUsersList((err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Record not found" });
        } else {
            return res.status(200).json({ success: "Only Users fetched successfully", data });
        }
    });
}


// Show all post: through Admin Access
exports.adminAccess = (req, res) => {

    userModel.adminAccess(req.body, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: err });
        } else {
            return res.status(200).json({ data });
        }
    });
}


// Show post ById: through Admin Access
exports.adminGetById = (req, res) => {

    userModel.adminGetById(req.params.id, (err, data) => {
        if (err) {
            return res.json({ success: false, message: error });
        } else {
            return res.status(200).json({ data })
        }
    });
}


// Update post: through Admin Access
exports.adminPostUpdate = (req, res) => {

    if (Object.keys(req.body).length === 0) {
        res.status(400).send({ success: false, message: "Please provide all fields" });
    } else {
        userModel.adminPostUpdate(req.params.id, req.body, (err, result) => {
            if (err)
                return res.status(500).json({ success: false, message: "Data not updated" });
            else
                return res.status(200).json({ success: "Data Updated successfully", data: result });
        });
    }
}


// Soft Delete post: through Admin Access
exports.adminPostDelete = (req, res) => {

    userModel.adminPostDelete(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: err });
        } else {
            return res.status(200).json({ data });
        }
    });
}
