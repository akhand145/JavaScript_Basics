const express = require('express');
const corsMiddleware = require('./cors/index');

// create express app
const app = express();

app.options('*', corsMiddleware);

app.use(corsMiddleware);

// setup server port
const port = process.env.port || 4500;


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/es7.html");
});

// listening the port
app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});

