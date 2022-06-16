///////////////////OR Operator//////////////////////////////////

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}
// This shows the OR operator

///////////////////////////////////////////////////////////////

let firstName = "Akhand";
let lastName = "Singh";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoders
// This shows the Or operator in anonymous;

//////////////////AND Operator////////////////////////////////

let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}


//////////////////NOT Operator////////////////////////////////

console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false


/////////////////AND Operator with if else///////////////////

let age = 125;
if (age >= 14 && age <= 90){
    console.log("the age is ");
} else{
console.log("write age btw 14 to 90");
}
