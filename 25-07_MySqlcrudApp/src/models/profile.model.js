const dbConn = require('../../config/db.config');


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
exports.logout = (id, result) => {
    const update = `UPDATE users SET jwtToken = ''  WHERE id = ?`;

    dbConn.query(update, id, (err, data) => {
        if (!err) {
            return result(null, data);
        } else {
            return result(err, null);
        }
    });
}