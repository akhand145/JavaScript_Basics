const userModel = require('../models/profile.model');
const { compareSync, genSaltSync, hashSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const validationResult = require('express-validator');


// User forgotPassword:
exports.forgotPassword = (req, res) => {

    console.log(req.body);

    if (req.body.new_password === req.body.confirm_password) {
        const salt = genSaltSync(10);
        const hashPass = hashSync(req.body.new_password, salt);

        userModel.forgotPassword(req.body.email, (err, data) => {
            console.log(data[0].password);
            const result = req.body.email === data[0].email;

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

    userModel.logout(req.body.email, (err, data) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).json({ success: true, message: "Logout Successfully", data });
        }
    });
}


exports.sendEmail = (req, res) => {

    const user = userModel.findByEmail(res.locals.email);
    if (user) {
        let otp = OTPgenerator();
        const data = userModel.findOtpByEmail(user.email);

        if (data.length == 0 || data[0].is_verify != 'Yes') {
            userModel.insertOtp(user.email, user.user_id, otp);

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MAIL_ID,
                    pass: process.env.MAIL_PASSWORD,
                },
            });

            let mailOptions = {
                from: process.env.MAIL_ID,
                to: res.locals.email,
                subject: "OTP verification",
                text: otp,
            }

            const info = transporter.sendMail(mailOptions);
            return res.send("Email send successfully");
        } else {
            return res.send("Verification is already done");
        }
    } else {
        return res.send("Email doesn't exist");
    }
}


exports.verifyOtp = (req, res) => {

    const data = userModel.findOtpByEmail(res.locals.email);
    if (data[0].otp === req.body.otp) {

        userModel.updateOtpStatus(res.locals.email);
        res.send("Verification successful");
    } else {
        res.send("Otp doesn't match");
    }
}


let OTPgenerator = () => {
    let numbers = "0123456789";
    let OTP = "";
    for (let i = 0; i < 4; i++) {
        OTP += numbers[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


// User forgotPassword with NodeMailer:

// const dbConn = require("../dbConnection").promise();
// exports.forgotPassNodemailer = async (req, res, next) => {

    //     exports.sendOTP = async (req, res, next) => {
    //         const errors = validationResult(req);
    //         if (!errors.isEmpty()) {
    //           return res.status(422).json({ errors: errors.array() });
    //         }
    //         try {
    //           if (
    //             !req.headers.authorization ||
    //             !req.headers.authorization.startsWith("Bearer") ||
    //             !req.headers.authorization.split(" ")[1]
    //           ) {
    //             return res.status(422).json({
    //               message: "Please provide the token",
    //             });
    //           }
    //           const theToken = req.headers.authorization.split(" ")[1];
    //           const decoded = jwt.verify(theToken, "the-super-strong-secret");
    //           let userid = decoded.id;

    //           let e_ar = Object.values(Email[0][0]);
    //           let email = e_ar[0];

    //           let OTPgenerator = () => {
    //             let numbers = "0123456789";
    //             let OTP = "";
    //             for (let i = 0; i < 4; i++) {
    //               OTP += numbers[Math.floor(Math.random() * 10)];
    //             }
    //             return OTP;
    //           };
    //           let transporter = nodemailer.createTransport({
    //             service: "gmail",
    //             auth: {
    //               user: "akhandsingh145@gmail.com",
    //               pass: "vibjuoggfosghmqu",
    //             },
    //           });
    //           let otp = OTPgenerator();
    //           console.log(otp);


    //           if (rows.length == 0) {
    //             const [row] = await conn.execute(
    //               "INSERT INTO `SENT_OTP` (`email`,`userID`, `OTP`) VALUES (?, ?, ?)",
    //               [email, userid, otp]
    //             );
    //           } else {
    //             await conn.execute(
    //               "UPDATE SENT_OTP SET `OTP`=?, `timestamp`=CURRENT_TIMESTAMP WHERE `email`=?",
    //               [otp, email]
    //             );
    //           }
    //           let mailOptions = {
    //             from: "akhandsingh145@gmail.com",
    //             to: email,
    //             subject: "OTP verification",
    //             text: otp,
    //           };
    //           transporter.sendMail(mailOptions, function (error, info) {
    //             if (error) {
    //               console.log(error);
    //             } else {
    //               res.json("Email Sent successfully");
    //               console.log("Email sent: ");
    //             }
    //           });
    //         } catch (err) {
    //           next(err);
    //         }
    //       };

    //     //   const conn = require("../dbConnection").promise();

    //       exports.verifyOTP = async (req, res, next) => {
    //         const errors = validationResult(req);
    //         if (!errors.isEmpty()) {
    //           return res.status(422).json({ errors: errors.array() });
    //         }
    //         try {
    //           if (
    //             !req.headers.authorization ||
    //             !req.headers.authorization.startsWith("Bearer") ||
    //             !req.headers.authorization.split(" ")[1]
    //           ) {
    //             return res.status(422).json({
    //               message: "Please provide the token",
    //             });
    //           }
    //           const theToken = req.headers.authorization.split(" ")[1];
    //           const decoded = jwt.verify(theToken, "the-super-strong-secret");
    //           let userid = decoded.id;
    //           const row = await conn.execute("SELECT * FROM `SENT_OTP` WHERE `id`=?", [
    //             userid,
    //           ]);
    //           // console.log(row);
    //           if (row.length === 0) {
    //             return res.status(422).json({
    //               message: "please generate otp",
    //             });
    //           }
    //           else {
    //           const rows = await conn.execute(
    //             "DELETE FROM `SENT_OTP` WHERE timestamp < (NOW() - INTERVAL 1 MINUTE) AND userID = ?",
    //             [userid]
    //           );
    //           if (rows[0].affectedRows === 1) {
    //             return res.status(201).json({
    //                 message: "otp expired",
    //             });
    //         }
    //           // const Email = await conn.execute("SELECT email FROM `users` WHERE `id`=?", [
    //           //   userid,
    //           // ]);
    //           // email = Object.values(Email[0][0]);
    //           const [userdetails] = await conn.execute(
    //             "Select OTP from SENT_OTP WHERE userID=?",
    //             [userid]
    //           );
    //           let status = 1;
    //           if (userdetails[0].OTP == req.body.OTP) {
    //             const [row] = await conn.execute(
    //               "UPDATE users SET userStatus = ? WHERE id = ?",
    //               [status, userid]
    //             );
    //             return res.status(201).json({
    //               message: "OTP mached",
    //             });
    //           } else {
    //             return res.status(201).json({
    //               message: "OTP is not  mached",
    //             });
    //           }
    //         }
    //         } catch (err) {
    //           next(err);
    //         }
    //       };
// }

