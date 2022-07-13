const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup server port
const port = process.env.port || 5500;

// parse request of content-type -application/form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));

// parse request of content-type - application/json
app.use(bodyParser.json());

// defining a root route
app.get('/', (req, res) => {
    res.send('Hello World from CRUD API');
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.route');

// using middleware
app.use('/api/v1/employees', employeeRoutes);

// listening the port
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});