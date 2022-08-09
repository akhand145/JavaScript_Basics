const dbConn = require('../../../config/db.config');


// Register a new user:
exports.create = (data, result) => {

    const { firstName, lastName, age, gender, email, password, userTypes, status, isDeleted } = data;

    const insert = `INSERT INTO users(firstName, lastName, age, gender, email, password, 
        userTypes, status, isDeleted) VALUES(?, ?, ?, ?, ?, ?, "User", "Approved", 0)`;

    dbConn.query(insert, [firstName, lastName, age, gender, email, password, userTypes, status, isDeleted], (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}


// Login a user:
exports.getUserByEmail = (email, result) => {

    dbConn.query(`SELECT * FROM users WHERE email = ?`, email, (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data[0]);
        }
    });
}


// getAll Registered users:
exports.getAll = (result) => {

    dbConn.query(`SELECT firstName, lastName, age, gender, email, password, 
    userTypes, status, isDeleted FROM users`, (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}


// get Registered user ById:
exports.getById = (id, result) => {

    dbConn.query(`SELECT firstName, lastName, age, gender, email, password, 
    userTypes, status, isDeleted FROM users WHERE id = ?`, [id], (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            if (data.length == 0)
                return result(null, "Record not found");
            else
                return result(null, data);
        }
    });
}


// Update a Registered user:
exports.update = (id, data, result) => {

    dbConn.query(`UPDATE users SET ?  WHERE id = ?`, [data, id], (err) => {
        if (err) {
            return result(err, null);
        } else {
            return result(null, data);
        }
    });
}


// Soft Delete a registered user:
exports.delete = (id, result) => {

    dbConn.query(`SELECT * FROM users  WHERE id = ?`, id, (err, data) => {
        if (err) {
            return result(err, null);
        } else {
            if (data.length == 0)
                return result(null, "Data does not exist");
            else
                dbConn.query(`UPDATE users SET isDeleted = ?  WHERE id = ?`, [1, id], (err) => {
                    if (!err) {
                        return result(null, "User is Deleted Successfully");
                    } else {
                        return result(err, null);
                    }
                })
        }
    });
}


// Delete a Registered user:
// exports.delete = (id, result) => {

//     dbConn.query(`SELECT * FROM users  WHERE id = ?`, id, (err, data) => {
//         if (err) {
//             return result(err, null);
//         } else {
//             if (data.length == 0)
//                 return result(null, "Data does not exist");
//             else
//                 dbConn.query(`DELETE FROM users  WHERE id = ?`, id, (err) => {
//                     if (!err) {
//                         return result(null, "User is Deleted Successfully");
//                     } else {
//                         return result(err, null);
//                     }
//                 });
//         }
//     });
// }


// Show User posts:
exports.showUserPost = (id, result) => {

    dbConn.query(`SELECT * FROM users  WHERE id = ?`, id, (err, data) => {
        console.log(data);
        if (err) {
            return result(err, null);
        } else
            return result(null, data.filter((item) => item.userTypes === 'User'));
    });
}


// Show all post : Admin Access
exports.adminAccess = (result) => {
    
    dbConn.query(`SELECT * FROM posts`, req.body, (err, data) => {
        console.log(data);
        if (err) {
            return result(err, null);
        } else
        return result(null, data.filter((item) => item.userTypes === 'User'));
    });
}

