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
            const jsontokenreg = sign({ data }, process.env.SECRET_KEY, {
                expiresIn: "1h"
            });
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
                const jsontoken = sign({ result: data[0] }, process.env.SECRET_KEY, {
                    expiresIn: "1h"
                });
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


// User forgotPassword:
exports.forgotPassword = (req, res) => {
    const email = req.body.email;

    userModel.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "User with this email already exists" });
        }
        const token = jwt.sign({ data }, process.env.RESET_PASSWORD_KEY, { expiresIn: "10m" });

        let transport = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GOOGLE_APP_EMAIL,
                pass: process.env.GOOGLE_APP_PW
            },
        });

        const forgot = {
            to: email,
            subject: 'Reset Account Password link',
            html: `<h3> Please Click on given link to reset your password </h3>
                <p> ${process.env.APP_PORT}/resetPassword/${token} </p>`
        }

        return user.updateOne({ resetLink: token }, (err, user) => {
            if (err) {
                return res.status(400).json({ error: "Reset Password link error" });
            } else {
                transport.sendMail(forgot, (err) => {
                    if (err) {
                        return res.status(400).json({ error: error.message });
                    } else {
                        return res.status(200).json({
                            message: `Email have been sent! kindly follow the instructions`,
                            data, token: jsontokenreg
                        });
                    }
                });
            }
        })
    });
}


// Show User post:
exports.showUserPost = (req, res) => {

    userModel.showUserPost(req.params.id, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: err });
        } else {
            return res.status(200).json({ data });
        }
    });
}


// Show all post : Admin Access
exports.adminAccess = (req, res) => {

    userModel.adminAccess(req.body, (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: err });
        } else {
            return res.status(200).json({ data });
        }
    });
}
