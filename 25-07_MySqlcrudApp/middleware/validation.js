const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();


exports.tokenVerify = (req, res, next) => {
    let token = req.get("Authorization");
    console.log(token+ " token");
    if (token) {
        token = token.slice(7);
        jwt.verify(token, process.env.SECRET_KEY, (err) => {
            if (err) {
                return res.json({
                    success : 0,
                    message : "Invalid Token"
                });
            } else {
                console.log("Authorised_user");
                return next();
            }
        });
    } else {
        return res.json({
            success : 0,
            message : "Access Denied! unauthorised user"
        });
    }
}


exports.isUser = (req, res, next) => {

    if (req.body.userTypes === 'User') {
        next();
    } else {
        res.send("You don't have the authorization");
    }
}


exports.isAdmin = (req, res, next) => {

    if (req.body.userTypes === 'Admin') {
        next();
    } else {
        res.send("You don't have the authorization");
    }
}
