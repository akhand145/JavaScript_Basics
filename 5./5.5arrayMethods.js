/////////////// Array Methods /////////////////
//// Splice : How to delete an element from the array ?

let arr  = ["I", "go", "home"];
delete arr[1];
console.log( arr.length );

/////////////////////////////////

arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]

////////////////// arr.splice() //////////////////////////////////

let arr1 = ["I", "study", "JavaScript", "right", "now"];
arr1.splice(0, 3, "Let's", "dance");

console.log( arr1 ) // now ["Let's", "dance", "right", "now"]

/////////////////////////////////////////////////////////////////

let arr2 = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
console.log( arr2 ); // "I", "study", "complex", "language", "JavaScript"


// Slice : arr.slice() is much simpler than arr.splice()
// arr.slice( [start], [end] )

let arr3 = ["t", "e", "s", "t"];
console.log( arr3.slice(1, 3) ); // e,s (copy from 1 to 3)
console.log( arr3.slice(-2) ); // s,t

/////////////// Concatenation => concat ////////////////
// arr.concat(arg1, arg2...)

let arr4 = [1, 2];

// create an array from: arr and [3,4]
console.log( arr4.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr4.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr4.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


////////// Iterate : forEach ///////////////

["Rohit", "Raman", "Rahul"].forEach((item, index, array) => {
    console.log (`${item} is at index ${index} in ${array}`);
  });

////////// Searching in Array //////////

let arr5 = [1, 0, true];

console.log( arr5.indexOf(0) ); // 1
console.log( arr5.indexOf(null) ); // -1
console.log( arr5.includes(1) ); // true

/////////// find and findIndex //////////////////////////////

// Item is the element
// Index is its index
// Array is the array itself

let users = [
    {id: 1, name: "Rahul"},
    {id: 2, name: "Raman"},
    {id: 3, name: "Rohit"}
  ];
  
  let user = users.find(item => item.id == 1);  
  console.log(user.name); // Rahul


///////////// Filter : arr.filter(fun) ///////////////////////

// The find method used for the single elements that makes the function return True
// But we used arr.filter(fun) for multiple data fetching

let users1 = [
    {id: 1, name: "Rahul"},
    {id: 2, name: "Rohit"},
    {id: 3, name: "Raman"}
  ];
  
  // returns array of the first two users
  let someUsers = users1.filter(item => item.id < 3);  
  console.log(someUsers.length); // 2


///////////////////// Transform an Array ///////////////////////////////

// arr.map method is one of the most useful method it calls the function for each element of 
// the array and returns the array of results.

let lengths = ["Rahul", "RohitSingh", "RamanRastogi"].map(item => item.length);
console.log( lengths );  // it shows the length of array items : [5, 10, 12]

//////////////////////// sort(fn) ////////////////////////////

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr6 = [ 1, 5, 10 ];
arr6.sort(compareNumeric);
console.log(arr6);  // 1, 5, 10

/////////////////////////////////////////////////////////////

let arr7 = [ 1, 2, 10 ];
arr7.sort(function(a, b) { return a - b; });
console.log(arr7);  // 1, 2, 10

////////////////// reverse => arr.reverse() ///////////////////

let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();

console.log( arr8 ); // 5,4,3,2,1

//////////////// Split & Join /////////////////////

let arr9 = 'Rahul, Rohit, Raman, Rinku'.split(', ', 2); // Split
console.log(arr9); // [ 'Rahul', 'Rohit' ]

////////////// Split into letters ///////////////

let str = "Raman";
console.log( str.split('') ); // [ 'R', 'a', 'm', 'a', 'n' ]

///////////////// arr.join() ////////////////////

let arr11 = ['Rahul, Rohit, Raman, Rinku'];
let str1 = arr11.join(';'); // glue the array into a string
console.log( str1 ); // Rahul, Rohit, Raman, Rinku

////////////// reduce/ reduceRight //////////////////
// arr.reduce and arr.reduceRight these methods are used to calculate a single value 
// based on the array

// let value = arr.reduce(function(accumulator, item, index, array) { }, [initial]);

// accumulator – is the result of the previous function call, equals initial the first time.
// item – is the current array item.
// index – is its position.
// array – is the array.

let arr12 = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result); // 15

//////////////// Array.isArray ///////////////////////

console.log(Array.isArray({})); // false : this is object type
console.log(Array.isArray([])); // true : this is array type

////////////////// thisArg ///////////////////////////

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);

/////////////////////// Tasks ////////////////////////
// 1.

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(  // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// 2.

function filterRange(arr13, a, b) {
  return arr13.filter(item => (a <= item && item <= b));
}

let arr13 = [5, 3, 8, 1];
let filtered = filterRange(arr13, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr13 ); // 5,3,8,1 (not modified)

// 3. 
function filterRangeInPlace(arr14, a, b) {

  for (let i = 0; i < arr14.length; i++) {
    let val = arr14[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr14.splice(i, 1);
      i--;
    }
  }
}

let arr14 = [5, 3, 8, 1];
filterRangeInPlace(arr14, 1, 4); // removed the numbers except from 1 to 4
console.log( arr14 ); // [3, 1]

// 4.

let arr15 = [5, 2, 1, -10, 8];
arr15.sort((a, b) => b - a);
console.log( arr );

// 5.

function copySorted(arr16) {
  return arr16.slice().sort();
}

let arr16 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr16);

console.log( sorted );
console.log( arr16 );

// 6.

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

// 7.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users2 = [ john, pete, mary ];
let names = users2.map(item => item.name);

console.log( names ); // John, Pete, Mary

// 8.

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users3 = [ john1, pete1, mary1 ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // John Smith

// 9.

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr17 = [ pete, john, mary ];

sortByAge(arr17);

// now sorted is: [john, mary, pete]
console.log(arr17[0].name); // John
console.log(arr17[1].name); // Mary
console.log(arr17[2].name); // Pete

// 10.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr18 = [1, 2, 3];
shuffle(arr18);
console.log(arr18);

// 11.

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let arr19 = [ john3, pete3, mary3 ];
console.log( getAverageAge(arr19) ); // 28

// 12.

function unique(arr20) {
  let result = [];

  for (let str of arr20) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) );


///////////////////////////////////////////////////////////////////