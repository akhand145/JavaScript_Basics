const EventEmitter = require("events");

const event = new EventEmitter();

// event.on('say my name', () => {
//     console.log("Your name is NodeJs ")
// })

// event.on('say my name', () => {
//     console.log("Your name is Express ")
// })

// event.on('say my name', () => {
//     console.log("Your name is MySQL ")
// })

event.on('checkPage', (statusCode, message) => {
    console.log(`status code is ${statusCode} and the page is ${message}`)
})   // function define

event.emit("checkPage", 200, "okay");   // function call  