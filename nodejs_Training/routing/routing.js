const http = require('http');
const { type } = require('os');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/") {
        res.end('Hello from home');
    } else if(req.url == "/about") {
        res.end('Hello from about');
    } else if(req.url == "/contact") {
        res.end('Hello from contact');
    } else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1> 404 Error Page </h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});