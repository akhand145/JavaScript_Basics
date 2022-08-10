const dbConn = require('../../../config/db.config');


// User resetPassword:
exports.resetPassword = (id, data, result) => {

    dbConn.query(`UPDATE users SET ?  WHERE id = ?`, [data, id], (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}
