//////////////////////////// Numbers ///////////////////////////////////

let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

//////////////////////////// Math.round() /////////////////////////////

let num1 = 1.23456;

console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


////////////////// uses of parseInt & parseFloat /////////////////
console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, only the integer part is returned
console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

////////////////////// Math.random() ////////////////////

console.log( Math.random() ); // 0.1234567894322

///////////////// Math.max() & Math.min() Function ///////////////

console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1

///////////////// Math.pow(n, power) ///////////////////

console.log( Math.pow(2, 10) ); // 2 in power 10 = 1024

///////////// 6.35.toFixed(1) == 6.3 ///////////////////////////////////////////

console.log( 6.35.toFixed(20) ); // 6.34999999999999964473

////////////////// Math.round() //////////////////

console.log( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 6.4(rounded)

/////////////////////////////////////////////////

