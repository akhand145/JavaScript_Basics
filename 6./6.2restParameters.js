///////////////////// Rest Parameters and spread Syntax ////////////////////////

// Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments.

// A function can be called with any number of arguments, no matter how it is defined.


  function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6
  console.log( sumAll(1, 2, 3, 4) ); // 10
  console.log( sumAll(1, 2, 3, 4, 5) ); // 15

///////////////////// The Arguments Variable ////////////////////////

// There is also a special array-like object named arguments that contains all arguments by their index.

function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // it's iterable
    // for(let arg of arguments) console.log(arg);
  }
  
  // shows: 2, Rahul, Rohit
  showName("Rahul", "Rohit");
  
  // shows: 1, Rita, undefined (no second argument)
  showName("Rita");

///////////////////// Spread Syntax ///////////////////////////

console.log( Math.max(3, 5, 8) ); // 8

/////////////////////////////////////

let arr = [3, 5, 8];
console.log( Math.max[arr] );  // NaN

/////////////////////////////////////

let arr1 = [3, 5, 8];
console.log( Math.max(...arr1) ); // 8

//////////////////////////////////////

let arr2 = [-8, 5, 10];
console.log( Math.max(...arr1, ...arr2) ); // 10

console.log( Math.max(...arr1, ...arr2, 20) ); // 20

// It will include array and linked list on a same parameter

// spread syntax to turn the string into array of characters

let str = "Hello";
console.log( [...str] ); // H,e,l,l,o

//////////////////////////// Copy an array/object //////////////////////////

let arr3 = [1, 2, 3];

let arrCopy = [...arr3]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr3) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr3 === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr3.push(4);
console.log(arr3); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3

///////////////////////////////////////////////////////////////////////////

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

////////////////////////////////////////////////////////////////////////////

// Rest parameters are used to create functions that accept any number of arguments.
// The spread syntax is used to pass an array to functions that normally require a list of many arguments.

