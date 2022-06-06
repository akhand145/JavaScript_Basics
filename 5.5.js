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