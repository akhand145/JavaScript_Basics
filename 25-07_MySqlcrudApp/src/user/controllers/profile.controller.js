const userModel = require('../models/profile.model');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();


// User forgotPassword:
exports.forgotPassword = (req, res) => {
    const email = req.body.email;

    userModel.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "User with this email doesn't exists" });
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


// User resetPassword:
exports.resetPassword = (req, res) => {
    
    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);

    userModel.update(req.params.id, req.body.email, (err, result) => {
        if (err) {
            return res.status(400).json({ error: "User with this email doesn't exists" });
        }
        else if (result != data.password) {
            return res.status(500).json({ success: false, message: "Password not matched" });
        } else {
            console.log(req.body.password);
            const result = compareSync(req.body.password, data.password);
            if (result)
            // new_password === confirm_password;
            
            return res.status(200).json({ success: "Password Updated successfully", result : data[0] });
        }
    });
}


// User Logout
exports.logout = (req, res) => {
    const email = req.body.email;

    userModel.findOne({ email }, (err, user) => {

    });
}

