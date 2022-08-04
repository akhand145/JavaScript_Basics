const prompt = require("prompt-sync")();
const shop_open = 10;
const shop_close = 19;

const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
let day = prompt("Enter the day: ").slice(0, 3).toLowerCase();

if (days.includes(day)) {
    let time = prompt("Enter the time: ");

    if (time < shop_open) {
        console.log(`Office will be open after ${shop_open - time} hour at 10AM`);
    }
    else if (time >= shop_open && time <= shop_close) {
        console.log(`Office is open for ${shop_close - time} hours`);
    }
    else if (day != 'fri') {
        console.log(`Office will be open after ${(24 - time) + 10} hours at 10AM`);
    }
    else {
        console.log("Office is closed till Monday 10AM.");
    }
}
else {
    console.log("Office is closed till Monday 10AM.");
}
