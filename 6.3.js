///////////////////////////// Variable, Scope & Closure ///////////////////////////////

// Code blocks
// show message
let message = "Hello";
console.log(message);

// show another message
let message1 = "Goodbyeeeeeeeeee";
console.log(message1);

///////////////////// Nested Functions ////////////////////////

// A function is called "nested" when it is created inside another function

function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }

////////////////////////////////////////////////////////

  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2

// Variables
  