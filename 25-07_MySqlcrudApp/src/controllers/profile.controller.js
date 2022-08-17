const userModel = require('../models/profile.model');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const nodemailer = require('nodemailer');
const crypto = require('crypto');


// User forgotPassword:
// exports.forgotPassword = (req, res) => {
//     const email = req.body.email;

//     userModel.findOne({ email }, (err, user) => {
//         if (err || !user) {
//             return res.status(400).json({ error: "User with this email doesn't exists" });
//         }
//         const token = jwt.sign({ data }, process.env.RESET_PASSWORD_KEY, { expiresIn: "10m" });

//         let transport = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true,
//             auth: {
//                 user: process.env.GOOGLE_APP_EMAIL,
//                 pass: process.env.GOOGLE_APP_PW
//             },
//         });

//         const forgot = {
//             to: email,
//             subject: 'Reset Account Password link',
//             html: `<h3> Please Click on given link to reset your password </h3>
//                 <p> ${process.env.APP_PORT}/resetPassword/${token} </p>`
//         }

//         return user.updateOne({ resetLink: token }, (err, user) => {
//             if (err) {
//                 return res.status(400).json({ error: "Reset Password link error" });
//             } else {
//                 transport.sendMail(forgot, (err) => {
//                     if (err) {
//                         return res.status(400).json({ error: error.message });
//                     } else {
//                         return res.status(200).json({
//                             message: `Email have been sent! kindly follow the instructions`,
//                             data, token: jsontokenreg
//                         });
//                     }
//                 });
//             }
//         })
//     });
// }


// User resetPassword:
exports.resetPassword = (req, res) => {

    console.log(req.body);

    if (req.body.new_password === req.body.confirm_password) {
        const salt = genSaltSync(10);
        const hashPass = hashSync(req.body.new_password, salt);

        userModel.resetPassword(req.params.id, (err, data) => {
            console.log(data[0].password);
            const result = compareSync(req.body.old_password, data[0].password);

            if (result) {
                userModel.updatePassword(req.params.id, hashPass, (err, data) => {
                    if (data) {
                        return res.status(200).json({
                            success: "Password updated Successfully",
                            result: data[0]
                        });
                    } else {
                        return res.json(err);
                    }
                })
            } else {
                return res.status(400).json(err);
            }
        })
    } else {
        return res.status(500).json({ success: false, message: "Password not matched" });
    }
}


// User Logout
exports.logout = (req, res) => {
    const email = req.body.email;

    userModel.findOne({ email }, (err, user) => {

    });
}

