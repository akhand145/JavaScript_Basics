const userModel = require('../models/user.model');
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();


// findAll user data: 
// exports.findAll = (req, res) => {

//     userModel.findAll((err, result) => {
//         if (err)
//         res.send({ status : "Error while fetching users", message : err });
//         else
//         res.json({ status : "Users fetched successfully", message : result });
//     });
// }


// findById user data:
// exports.findById = (req, res) => {
 
//     userModel.findById(req.params.id, (err, result) => {
//         if (err)
//         res.send({ status : "Error while fetching users", message : err });
//         else {
//             if(result.length === 0) 
//             res.json({ status : "failure", message : "not found!"});
//             else
//             res.json({ status : "User fetched successfully", message : result });
//         }
//     });
// }


// create user data:
// exports.create = (req, res) => {

//     if(Object.keys(req.body).length === 0) {
//         res.status(400).send({ success : false, message : "Please provide all fields" });
//     } else {
//         userModel.create(req.body, (err, result) => {
//             if (err)
//             res.send({ status : "Error while creating user", message : err });
//             else
//             res.json({ status : "User Created Successfully", message : result, data : result });
//         });
//     }
// }


// getAll users:
exports.getAll = (req, res) => {

    userModel.getAll((err, result) => {
        if (err) {
            return res.status(500).json({
                success : false,
                message : "Record not found"
            });
        } else {
            return res.status(200).json({
                success : "Users fetched successfully",
                data : result
            });
        }
    });
}


// get user ById: 
exports.getById = (req, res) => {

    const id = req.params.id;

    userModel.getById(id, (err, result) => {
        if (err) {
            return res.status(500).json({
                success : false,
                message : "Record not found"
            });
        } else {
            return res.status(200).json({
                success : "User fetched successfully",
                data : result
            });
        }
    });
}


// Register a new user:
exports.create = (req, res) => {
    
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    userModel.create(body, (err, result) => {
        if (err) {
        return res.status(500).json({
            success : false,
            message : "Database connection error"
        });
        } else {
        return res.status(200).json({
            success : "Data Created Successfully",
            data : result
        });
        }
    });
}


// Update a user:
exports.update = (req, res) => {

    const id = req.params.id;
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    userModel.update(id, body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success : false,
                message : "Data not updated"
            });
        } else {
            return res.status(200).json({
                success : "Data Updated successfully",
                data : result 
            });
        }
    });
}


// Delete a user:
exports.delete = (req, res) => {

    const id = req.params.id;

    userModel.delete(id, (err) => {
        if (err) {
            return res.status(500).json({
                success : false,
                message : "Record not found!"
            });
        } else {
            return res.status(200).json({
                success : true,
                message : "User deleted successfully"
            });
        }
    });   
}


// Login a user:
exports.login = (req, res) => {

    // const { email, password } = req.body;
    // const body = req.body;

    // userModel.getUserByEmail(body.email, (data) => {

    //     if(body.email.trim() === '' || body.password.trim === '') {
    //         return res.status(400).json({ message : "Email or Password must not be empty" });
    //     }
    
    //     // Check the user with that email exist or not
    //     if (data.length === 0) {
    //         return res.status(401).json({ message : "Email or Password is incorrect" });
    //     }
    
    //     // Check Password
    //     bcrypt.compare(body.password, data.password).then(isMatch => {
    //         if (isMatch === false) {
    //             return res.status(401).json({ message : "Email or Password is incorrect" });
    //         }
    
    //         // Generate Token
    //         // const token = jwt.sign({ id: data[0].id.toString() }, process.env.SECRET_KEY )
    //         const result = sign({ result : data[0] }, process.env.SECRET_KEY, {
    //              expiresIn : "1h"
    //             });
    //         return res.status(200).json({
    //             message : "Logged In Successfully",
    //             user : data[0],
    //             token : jsontoken
    //         });
    //     });    
    // });
    

    const body = req.body;

    userModel.getUserByEmail(body.email, (err, data) => {
        if (err) {
            return res.status(500).json({
                success : false,
                message : "Invalid email or password"
            });
        } else {
            const result = compareSync(body.password, data.password);
            if (result) {
                data.password = undefined;
                const jsontoken = sign({ result : data[0] }, process.env.SECRET_KEY, {
                    expiresIn : "1h"
                });
                return res.status(200).json({
                    success : 1,
                    message : "Login Successfully",
                    token : jsontoken
                });
            } else {
                return res.json({
                    success : 0,
                    message : "Invalid email or password"
                });
            }
        }
    });

    // userModel.getUserByEmail(body.email, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     if (!data) {
    //         return res.json({
    //             success : 0,
    //             data : "Invalid email or password"
    //         });
    //     }
    //     const result = compareSync(body.password, data.password);
    //     if (result) {
    //         data.password = undefined;
    //         const jsontoken = sign({ result : data[0] }, "qwe1234", {
    //             expiresIn : "1h"
    //         }); 
    //         return res.json({
    //             success : 1,
    //             message : "Login Successfully",
    //             token : jsontoken
    //         });
    //     } else {
    //         return res.json({
    //             success : 0,
    //             data : "Invalid email or password"
    //         });
    //     }
    // });

}

