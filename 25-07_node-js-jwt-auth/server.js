const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT = 7500;

const app = express();

var corsOptions = {
    origin: "http://localhost:7505"
};


app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    res.json({ message : "Welcome to the Developer's World" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



const db = require("./models/");

const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
