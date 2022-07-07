const express = require('express');
const app = express();
const path = require('path');

// console.log(__dirname);

// console.log(path.join(__dirname, "../public")); 

const staticPath = path.join(__dirname, "../public");

// built-in static Middleware
// app.use(express.static(staticPath));
app.use(express.static(staticPath));

app.get('/', (req, res) => {
    res.send("Hello World from ExpressJS");
});

app.get('/about', (req, res) => {
    res.send("Hello from the About page");
});

app.listen(8010, () => {
    console.log("Listening at port 8010");
});

