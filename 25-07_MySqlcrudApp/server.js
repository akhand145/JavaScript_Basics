const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


// create express app
const app = express();
dotenv.config();

// setup server port
const port = process.env.APP_PORT;

// routes path
const userRoute = require('./src/user/routes/user.route');
const loginRoute = require('./src/user/routes/login.route');


// parse request of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true }));

// parse request of content-type - application/json
app.use(bodyParser.json());


// using middleware - Create routes
app.use(cors())

app.use('/api/user', userRoute);
// app.use('/api/login', loginRoute);


app.get('/', (req, res) => {
    res.send("Hello, We are working with JWT");
});


// listening the port 
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${port}`);
});

