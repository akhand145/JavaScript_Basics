const express = require('express');
const app = express();
const port = 8010;

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Home Page</h1>");
});

app.get('/about', (req, res) => {
    res.status(200).send("Welcome to the About Page");
});

app.get('/contact', (req, res) => {
    res.send("Welcome to the Contact Page");
});

app.get('/temp', (req, res) => {
    res.json([
    {
        id : 1,
        name : "Mayank",
    },
    {
        id : 2,
        name : "Mohit",
    },
    {
        id : 3,
        name : "Manav",
    },
    {
        id : 4,
        name : "Manish",
    },
]);
});

app.listen(port, () => {
    console.log(`listening to the port no : ${port}`);
});