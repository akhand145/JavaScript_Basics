'use strict';

const dbConn = require('../../db.config');

// findAll the data:
exports.findAll = (result) => {

    dbConn.query("SELECT * FROM posts", (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
} 


// find the data By Id:
exports.findById = (id, result) => {

    dbConn.query("SELECT * FROM posts where posts.id = ? ", id, (err, res) => {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}


// Create the data:
exports.create = (data, result) => {
    
    const { title, description, userId } = data;
    const insert = `INSERT INTO posts(title, description, userId) VALUES(?, ?, ?)`;

    dbConn.query(insert, [title, description, userId], (err, data) => {
        if(!err) {
            result(null, data);
        } else {
            result(null, err);
        }
    });
}


// Update the data:
exports.update = (id, data, result) => {
    const { title, description } = data;

    const update = `UPDATE posts SET title = ?, description = ?  WHERE id = ?`;
    
       dbConn.query(update, [title, description, id], (err, data) => {
            if(!err) {
                result(null, data);
            } else {
                result(err, null);
            }
        });
}


// exports.update = (id, data, result) => {

//     const { title, description, userId } = data;
//     const update = `UPDATE posts SET title = ?, description = ?, userId = ?  WHERE id = ?`;

//     dbConn.query(update, [title, description, userId, id], (err, data) => {
//         if(!err) {
//             result(null, data);
//         } else {
//             result(err, null);
//         }
//     });
// }


// Delete the data:
exports.delete = (id, result) => {
    dbConn.query(`DELETE FROM posts WHERE id = ?`, [id], (err) => {
        if(!err) {
            result(null, "Data is deleted");
        } else {
            result(null, err);
        }
    });
}

