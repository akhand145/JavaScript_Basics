const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// create express app
const app = express();

// setup server port
const port =  process.env.port || 5500;

// routes path
const userRoutes = require('./src/routes/user.route');
const postRoutes = require('./src/routes/post.route');


// parse request of content-type -application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : true }));

// parse request of content-type - application/json
app.use(bodyParser.json());


// using middleware - Create routes
app.use(cors())
app.use(express.json())
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


app.get('/', (req, res) => {
    res.send('Hello Everyone');
});


// listening the port 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

