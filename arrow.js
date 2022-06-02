//////////////////////// Arrow Function ////////////////////////

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

/////////////////////////////////////////////////////////////////

console.log( sum(1, 2) ); // Output : 3

let multiple = n => n * 2;
// roughly the same as: let multiple = function(n) { return n * 2 }

console.log( multiple(3) ); // 6

/////////////////////////////////////////////////////////////////

let age = console.log("What is your age ?", 18);

let welcome = (age < 18) ?
    () => console.log('Hello!') : () => console.log("Greetings!"); 
    welcome();

/////////////////////////////////////////////////////////////////

let sum1 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum1(1, 2) ); // 3

/////////////////////////////////////////////////////////////////

function ask(question, yes, no) {
    if(console.log(question)) yes();
    else no();
}
ask(
    "Do you agree ?",
    () => console.log("You agreed"),
    () => console.log("You Cancelled the Execution")
);