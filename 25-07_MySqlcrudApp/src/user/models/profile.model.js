const dbConn = require('../../../config/db.config');


// User resetPassword:
exports.update = (id, data, result) => {

    dbConn.query(`UPDATE users SET ?  WHERE id = ?`, [data, id], (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}
