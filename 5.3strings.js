////////////////// Strings ////////////////////

// In JavaScript, the textual data is stored as strings.

/////////// Quotes //////////

// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

function sum(a, b) {
    return a + b;
  }
  
  console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3

// Backticks, allow us to embedded any expression into the string, by wrapping it in ${…}

let guestList = `Guests:
 * Rahul
 * Rohit
 * Raman
`;

console.log(guestList); // a list of guests, multiple lines

/////////////// Special Characters /////////////////

let guestList1 = "Guests:\n * Rahul\n * Rohit\n * Raman";

console.log(guestList1); // a multiline list of guests

//////////////// String Length //////////////////////

let str = `Hello`;

// the first character
console.log( str[0] ); // H
console.log( str.charAt(0) ); // H

// the last character
console.log( str[str.length - 1] ); // o

//////////// Accessing Characters ////////////

for (let char of "Hello") {
    console.log(char); // H,e,l,l,o 
  }

////////// Strings are immutable ///////////

let str1 = 'Hi';

str1 = 'h' + str1[1]; // replace the string

console.log( str1 ); // hi

/////////////////// Changing the Case /////////////////
////////// .toUpperCase() & .toLowerCase() ///////////

console.log( 'Interface'.toUpperCase() ); // INTERFACE
console.log( 'Interface'.toLowerCase() ); // interface

///////// Searching for a SubString ( str.indexOf() )//////////

let str2 = 'Widget with id';

console.log( str2.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str2.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str2.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

////////////////////////// Getting a substring /////////////////////////////////

////////////////// str.slice(start [, end]) ///////////////////
// Returns the part of the string from start to (but not including) end.

let str3 = "stringify";
console.log( str3.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( str3.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0


// If there is no second argument, then slice goes till the end of the string
console.log( str3.slice(2) ); // 'ringify', from the 2nd position till the end


// Negative values for start/end are also possible
console.log( str3.slice(-4, -1) ); // 'gif'
// start at the 4th position from the right, end at the 1st from the right

///////////////// str.substr(start [, length]) ///////////////////////////////////

let str4 = "stringify";
console.log( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters
console.log( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters

