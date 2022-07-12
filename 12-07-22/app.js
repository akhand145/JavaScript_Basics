// to create the express application
const express = require('express');
const app = express();

// declare middleware body-parser
const bodyParser = require('body-parser');

// use body-parser
app.use(bodyParser.urlencoded({extended : true}));

// to get the data from the server
app.get('/', (req, res) => {
    res.send('Welcome to express JS');
});

// to get the data from the server using directory
app.get('/userData', (req, res) => {
    res.sendFile(__dirname + "/userData.html");
});

// to post the data on the server
app.post('/userData', (req, res) => {
    console.log(req.body);
    res.send(`User Name is ${req.body.name}, User Email is ${req.body.email} 
    and User Password is ${req.body.password}`);
    
});

// listening the server at Port 4000
app.listen(4000, () => {
    console.log('Server is listening at port 4000');
});

