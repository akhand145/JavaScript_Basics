const dbConn = require('../../config/db.config');

// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');
// const validationResult = require('express-validator');


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


// User findByEmail:
exports.findByEmail = (email, result) => {
    const getEmail = `SELECT * FROM users  WHERE email = ?`;

    dbConn.query(getEmail, email, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    })
}


exports.findOtpByEmail = (email, result) => {
    const findOtp = `SELECT * FROM sentOTP  WHERE email = ?`;

    dbConn.query(findOtp, email, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}

exports.insertOtp = (email, otp, id, result) => {
    const query = `INSERT INTO sentOTP (email, userID, otp) VALUES(?, ?, ?)`;

    dbconn.query(query, [email, otp, id], (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}

exports.updateOtpStatus = (email, result) => {
    const query = `UPDATE sentOTP SET is_verify = 'Yes'  WHERE email = ?`;

    dbconn.query(query, email, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}
