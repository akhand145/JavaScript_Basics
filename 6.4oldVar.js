////////////////////// The old "var" ///////////////////////////

// In the very first chapter about variables, we mentioned three ways of variable declaration:

// a. let
// b. const
// c. var

// var has no block scope
// Variables, declared with var, are either function-scoped or global-scoped.

if (true) {
    var test = true; // use "var" instead of "let"
  }
  
  console.log(test); // true, the variable lives after if

//  If we used let test instead of var test, then the variable would only be visible inside

  if (true) {
    let test = true; // use "let"
  }
  
  console.log(test); // ReferenceError: test is not defined


// The line var phrase = "Hello" has two actions in it:

// 1. Variable declaration (var)
// 2. Variable assignment (=)


function sayHi() {
    var phrase; // declaration works at the start...
  
    console.log(phrase); // undefined
  
    phrase = "Hello"; // ...assignment - when the execution reaches it.
  }
  
  sayHi();


// Ways to create IIFE

// (function() {
//     alert("Parentheses around the function");
//   })();
  
//   (function() {
//     alert("Parentheses around the whole thing");
//   }());
  
//   !function() {
//     alert("Bitwise NOT operator starts the expression");
//   }();
  
//   +function() {
//     alert("Unary plus starts the expression");
//   }();

////////////////////////////////////////////////////////////////