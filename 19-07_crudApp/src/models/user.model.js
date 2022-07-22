'use strict';

const dbConn = require('../../db.config');

// findAll the data:
exports.findAll = (result) => {

    dbConn.query(`SELECT first_name, last_name, email, phoneNo from users 
    INNER JOIN auths ON users.id = auths.userId`, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}


// find the data By Id:
exports.findById = (id, result) => {

    dbConn.query(`SELECT first_name, last_name, email, phoneNo from users 
    INNER JOIN auths ON users.id = auths.userId where users.id = ?`, id, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}


// Create the data:
exports.create = (data, result) => {
    const { first_name, last_name, email, phoneNo } = data;

    const insert1 = `INSERT INTO users(first_name, last_name, email) VALUES(?, ?, ?)`;
    const insert2 = `INSERT INTO auths(phoneNo, userId) VALUES(?, ?)`;

    dbConn.query(insert1, [first_name, last_name, email], (err, data) => {
        if(!err) {
            dbConn.query(insert2, [phoneNo, data.insertId], (res, err) => {
                if(!err) {
                    result(null, res);
                } else {  
                    result(null, err);
                }
        });
        }
    });
}


// Update the data:
exports.update = (id, data, result) => {
    const { first_name, last_name, email, phoneNo } = data;

    const update1 = `UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?`;
    const update2 = `UPDATE auths SET phoneNo = ? WHERE userId = ?`;

    dbConn.query(update1, [first_name, last_name, email, id], (err) => {
        if(!err) {
            dbConn.query(update2, [phoneNo, id], (err, res) => {
                if(!err) {
                    result(null, res);
                } else {
                    result(err, null);
                }
            });
        }
    });
}


// Delete user data:
exports.delete = (id, result) => {
    dbConn.query(`DELETE FROM auths WHERE userId = ?`, id, (err) => {
        if(!err) {
            dbConn.query(`DELETE FROM users WHERE id = ?`, id, (err) => {
                if(!err) {
                    result(null, "Data is deleted");
                } else {
                    result(err, null);
                }
            });
        }
        else result(err, null);
    });
}

