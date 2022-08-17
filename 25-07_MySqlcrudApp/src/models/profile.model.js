const dbConn = require('../../config/db.config');


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

