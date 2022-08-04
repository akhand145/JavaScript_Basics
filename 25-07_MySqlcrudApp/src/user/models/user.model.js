const dbConn = require('../../../config/db.config');


// findAll the data:
// exports.findAll = (result) => {

//     dbConn.query(`SELECT first_name, last_name, age, gender, email, password, userId FROM users 
//     INNER JOIN auths ON users.id = auths.userId`, (err, res) => {
//         if (err) {
//             result(err, null);
//         } else {
//             result(null, res);
//         }
//     });
// }


// findById the data:
// exports.findById = (id, result) => {

//     dbConn.query(`SELECT first_name, last_name, age, gender, email, password, userId FROM users 
//     INNER JOIN auths ON users.id = auths.userId WHERE users.id = ?`, id, (err, res) => {
//         if (err) {
//             result(err, null);
//         } else {
//             result(null, res);
//         }
//     });
// }


// create the data:
// exports.create = (data, result) => {
//     const { first_name, last_name, age, gender, email, password } = data;

//     const insert1 = `INSERT INTO users(first_name, last_name, age, gender) VALUES(?, ?, ?, ?)`;
//     const insert2 = `INSERT INTO auths(email, password, userId) VALUES(?, ?, ?)`;

//     dbConn.query(insert1, [first_name, last_name, age, gender], (err, data) => {
//         if (!err) {
//             dbConn.query(insert2, [email, password, data.insertId], (err, res) => {
//                 if (!err) {
//                     result(null, res);
//                 } else {
//                     result(err, null);
//                 }
//             });
//         }
//     });
// }




// getAll user:
exports.getAll = (result) => {

    dbConn.query(`SELECT first_name, last_name, age, gender, email, password FROM registration`, (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });   
}


// get userById:
exports.getById = (id, result) => {

    dbConn.query(`SELECT first_name, last_name, age, gender, email, password 
    FROM registration WHERE id = ?`, [id], (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}


// Register a new user:
exports.create = (data, result) => {

    const { first_name, last_name, age, gender, email, password } = data;

    const insert = `INSERT INTO registration(first_name, last_name, age, gender, email, password)
    VALUES(?, ?, ?, ?, ?, ?)`;

    dbConn.query(insert, [first_name, last_name, age, gender, email, password], (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}


// Update a new user:
exports.update = (id, data, result) => {

    const { first_name, last_name, age, gender, email, password } = data;

    const update = `UPDATE registration SET first_name = ?, last_name = ?, age = ?, gender = ?,
    email = ?, password = ?  WHERE id = ?`;

    dbConn.query(update, [first_name, last_name, age, gender, email, password, id], (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}


// Delete a user:
exports.delete = (id, result) => {

    dbConn.query(`DELETE FROM registration WHERE id = ?`, id, (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, "Data is Deleted");
        }
    });
}


// Login a user:
exports.getUserByEmail = (email, result) => {

    dbConn.query(`SELECT * FROM registration WHERE email = ?`, email, (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data[0]);
        }
    });
}

