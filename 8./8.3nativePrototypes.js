/////////////////////// Native Prototypes /////////////////////////

// object.prototype
let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

//////////////////// Other built-in prototypes /////////////////////

let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
console.log( arr.__proto__.__proto__.__proto__ ); // null


//////////////////////////// Tasks: //////////////////////////////////

// 1. Add method "f.defer(ms)" to functions

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
  };
  
  function f() {
    console.log("Hello!");
  }
  
  f.defer(1000); // shows "Hello!" after 1 sec


// 2. Add the decorating "defer()" to functions

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  // check it
  function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2); // shows 3 after 1 sec

///////////////////////////////////////////////////////