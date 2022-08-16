const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash');
const session = require('express-session');


// create express app
const app = express();
dotenv.config();

// setup server port
const port = process.env.APP_PORT;

// routes path
const userRoute = require('./src/routes/user.route');
const postRoute = require('./src/routes/post.route');
const profileRoute = require('./src/routes/profile.route');


// parse request of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true }));

// parse request of content-type - application/json
app.use(bodyParser.json());


// using middleware - Create routes
app.use(cors());
app.use(logger('dev'));
app.use(flash());
app.use(session({
    secret : '123458cat',
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge : 60000}
}));

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
app.use('/api/profile', profileRoute);


app.get('/', (req, res) => {
    res.send("Hello, We are working with JWT");
});


// listening the port 
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${port}`);
});

