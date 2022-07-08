const http = require("http");
const fs = require("fs");  
var requests = require("requests");

const hostname = '127.0.0.1';
const port = 8010;

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req, res) => {
    res.statusCode = 200

    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Lucknow&units=metric&appid=e3eb2623e4c27270011392af9ed4db57", 
        { streaming })
        
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];

            // console.log(arrData[0].main.temp);
            const realTimeData = arrData
            .map((val) => replaceVal(homeFile, val))
            .join(" ");
            res.write(realTimeData); 
        })
        .on("end", (err) => {
            if (err) return
            console.log("Connection closed due to errors", err);

            res.end();
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)

});