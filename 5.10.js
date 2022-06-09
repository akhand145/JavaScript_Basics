/////////////////// Destructuring Assignments ///////////////////

// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.

// Array Destructuring ////////////////////////////////////////////////////

// we have an array with the name and surname
let arr = ["Mayank", "Singh"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // Mayank
console.log(surname);  // Singh

//////////////////////////////////

let [firstName1, surname1] = "Mayank Singh".split(' ');
console.log(firstName1); // Mayank
console.log(surname1); // Singh

//////////////////////////////////////////////////////

let user = {};
[user.name, user.surname] = "Pawan Pandey".split(' ');

console.log(user.name); // Pawan
console.log(user.surname); // Pandey

//////////////////////////////////////////////////////

let user1 = {
    name: "Rohit",
    age: 25
  };
  
  // loop over keys-and-values
  for (let [key, value] of Object.entries(user1)) {
    console.log(`${key}:${value}`); // name:Rohit, then age:25
  }

/////////////////// Object Destructuring ///////////////

let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200

/////////////////// The rest pattern " " ///////////////

let options1 = {
    title1: "Menu",
    height: 200,
    width: 100
  };
  
  // title = property named title
  // rest = object with the rest of properties
  let {title1, ...rest} = options1;
  
  // now title="Menu", rest={height: 200, width: 100}
  console.log(rest.height);  // 200
  console.log(rest.width);   // 100


/////////////////////////// Tasks ///////////////////////////
/////////////////// Destructuring Assignment ////////////////

// 1.
let user2 = {
  name: "Rakesh",
  years: 25
};

let {name, years: age, isAdmin = true} = user2;

console.log( name ); // Rakesh
console.log( age ); // 25
console.log( isAdmin ); // true


// 2. //////// The Maximal Salary ///////////////

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let maxSalary = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(salaries));

/////////////////////////////////////////////////////////////
