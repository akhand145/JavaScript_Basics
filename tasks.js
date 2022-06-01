// Postfix & Prefix
let a = 1, b = 1;

console.log( ++a ); // 2, prefix form returns the new value
console.log( b++ ); // 1, postfix form returns the old value

console.log( a ); // 2, incremented once
console.log( b ); // 2, incremented once


//  Comma
let c = (1 + 2, 3 + 4);

console.log( c ); // 7 (the result of 3 + 4)