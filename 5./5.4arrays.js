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
fruits.shift();
console.log( fruits );

fruits.unshift("Apple");
console.log( fruits );

// Method Push and Unshift can add multiple elements:
fruits.push("Orange", "Lemon");
fruits.unshift("Pineapple", "Peach");

console.log( fruits );

// Internals : arr[0]
let arr = fruits;
console.log( arr === fruits );
arr.push("Pear");
console.log( fruits );

//////////////////////////////////////////////////////////////

let arr0 = ["Apple", "Orange", "Pear"];
for( let i=0; i<arr0.length; i++) {
    console.log( arr0[i] );
}

// Another form of Loop:
let fruits0 = ["Mango", "Banana", "Plum"];
for( let fruit of fruits0 ) {
    console.log( fruit );
}

// Uses of Key
for (let key in arr) {
    console.log( arr[key] );
  }

// Array Length:
fruits[123] = "Apple";
console.log(fruits.length);

///////////////////////////

let arr1 = [1,2,3,4,5];
arr1.length = 2;
console.log(arr);
arr.length = 5;
console.log( arr[3] );

// new Array
let arr2 = new Array(2); // will it create an array of [2] ?

console.log( arr2[0] ); // undefined! no elements.

console.log( arr2.length ); // length 2

// Multi-Dimensional Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log( matrix[1][1] ); // 5, the central element

// toString Array //
let arr3 = [1, 2, 3];

console.log( arr3 ); // 1,2,3
console.log( String(arr3) === '1,2,3' ); // true

///////// symbol.toPrimitive /////////
console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"

////// Array is a special kind of object, suited to storing and managing ordered data items


/////////////////// tasks : /////////////////////////////////////////
// 1.

let fruits1 = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits1;
shoppingCart.push("Banana");
console.log( fruits1.length ); // 4

// 2.

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");

// 3.

let arr4 = ["a", "b"];
arr.push(function() {
  console.log( this );
})

arr4[2]; // a,b,function(){...}

// 4.

function sumInput() {
    let numbers = [];  
    while (true) {
  
      let value = console.log("A number please?", 0);
  
      if (value === "" || value === null || !isFinite(value)) break;  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }  
  console.log( sumInput() );

///////////////////////////////////////////////////////////////////////