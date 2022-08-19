const dbConn = require('../../config/db.config');

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const validationResult = require('express-validator');


// User forgotPassword:
exports.forgotPassword = (email, result) => {
    const forgot = `SELECT * from users  WHERE email = ?`;

    dbConn.query(forgot, email, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}


// User resetPassword:
exports.resetPassword = (id, result) => {
    const reset = `SELECT password FROM users  WHERE id = ?`;

    dbConn.query(reset, id, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}


// User updatePassword:
exports.updatePassword = (id, new_password, result) => {
    const update = `UPDATE users SET password = ?  WHERE id = ?`;

    dbConn.query(update, [new_password, id], (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}


// User Logout:
exports.logout = (email, result) => {
    const update = `UPDATE users SET jwtToken = ''  WHERE email = ?`;

    dbConn.query(update, email, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}


// User forgotPassword with NodeMailer:
exports.sendOTP = (email, result) => {
    const update = await `SELECT * FROM users  WHERE email = ?`;
    const otp = await `SELECT * FROM SENT_OTP  WHERE email = ?`;

    dbConn.query(update, email, (err) => {
        if (!err) {
            dbConn.query(otp, email, (err, data) => {
                if (!err) {
                    return result(null, data);
                } else {
                    return result(err, null);
                }
            })
        } else {
            return result(err, null);
        }
    });
}
