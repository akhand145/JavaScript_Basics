///////////////////// Arrays ///////////////////////////
// Object allows us to create Keys value of Collection
// Array holds the similar types of data elements

///////////// Array Declaration ///////////////

let fruits = ["Apple", "Mango", "Banana"];

console.log( fruits[0] );  // Apple
console.log( fruits[1] );  // Mango
console.log( fruits[2] );  // Banana

///// Total count of elements in the array : length
console.log( fruits.length );  // 3

// Calculate the last elements index : fruits[fruits.length - 1]
console.log( fruits[fruits.length -1 ] );

// shorter syntax: fruits.at(-1)
console.log( fruits.at(-1) );

// Push : Adds an element to the end.
// Pop : Takes an element from the end. 

// Arrays in JS can work both as a Stack and Queue
// Stack follows LIFO (Last-In-First-Out)
// Queue follows FIFO (First-In-First-Out)

// Example of pop()
fruits.pop();
console.log( fruits );

// Example of push()
fruits.push("Banana");
console.log( fruits );

// Shift and unshift: