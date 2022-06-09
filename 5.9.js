////////////////// object.keys, values, entries ///////////////////////
// map.keys(), map.values(), map.entries()

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

let user = {
    name: "Mayank",
    age: 25
  };
  
  // loop over values
  for (let value of Object.values(user)) {
    console.log(value); // Mayank, 25
  }

///////////////////////// Transforming Objects ///////////////////////////////

let prices = {
    banana: 2,
    orange: 3,
    meat: 5,
  };
  
  let doublePrices = Object.fromEntries(
    
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  console.log(doublePrices.meat); // 10

///////////////////////////// Tasks /////////////////////////////////////////

// 1. Sum the Properties
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; // 650
  }
  
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log( sumSalaries(salaries) ); // 650


// 2. Count Properties

let user1 = {
    name: 'John',
    age: 30,
    designation: 'SD'
  };

function count(obj) {
    return Object.keys(obj).length;
  }
  
  console.log( count(user1) ); // 2

//////////////////////////////////////////////////////////