let arr = ["Apple", "Orange", "Pear"];
for( let i=0; i<arr.length; i++) {
    console.log( arr[i] );
}

// Another form of Loop:
let fruits = ["Mango", "Banana", "Plum"];
for( let fruit of fruits ) {
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

/////////////////// task : ////////////////////

let fruits1 = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits1;
shoppingCart.push("Banana");
console.log( fruits1.length ); // 4

/////////////////////////////////////////////////