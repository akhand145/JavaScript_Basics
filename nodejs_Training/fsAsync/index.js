const fs = require("fs");

fs.writeFile("read.txt", "today is awesome day ", 
() => {
    console.log("files is created");
});

fs.readFile('read.txt', "UTF-8", (err, data) => {
    console.log(data);
}); 

const data = fs.readFileSync('read.txt', "utf-8");
console.log(data);
console.log("after the data");
