/////////////////// Function Object, NFE //////////////////////////

function sayHi() {
    console.log("Hi");
  }
  
  console.log(sayHi.name); // sayHi

// The Name Property:

let user = {

    sayHi() {
      // ...
    },
  
    sayBye: function() {
      // ...
    }
  
  }
  
  console.log(user.sayHi.name); // sayHi
  console.log(user.sayBye.name); // sayBye


// The Length Property:

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2


// To call handler.length property:

function ask(question, ...handlers) {
    let isYes = console.log(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }
  
  // for positive answer, both handlers are called
  // for negative answer, only the second one
  ask("Question?", () => console.log('You said yes'), result => console.log(result));


// Custom Properties

function sayHi() {
    console.log("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value
  
  sayHi(); // Hi
  sayHi(); // Hi
  sayHi(); // Hi
  sayHi(); // Hi
  
  console.log( `Called ${sayHi.counter} times` ); // Called 4 times

// function makeCounter

function makeCounter() {
    // instead of:
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  
  let counter = makeCounter();

  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2
  console.log( counter() ); // 3
  

// Named Function Expression

let sayHi1 = function func(who) {
    console.log(`Hello, ${who}`);
  };
  
  sayHi1("John"); // Hello, John

///////////////////////////////////////

let sayHi2 = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // Now all fine
    }
  };
  
  let welcome = sayHi2;
  sayHi2 = null;
  
  welcome(); // Hello, Guest (nested call works)


///////////////////////// Tasks: ////////////////////////////

// Set & decrease for counter:
// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.

function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;  
    counter.decrease = () => count--;
  
    return counter;
  }

console.log(makeCounter());

// Sum with an arbitrary amount of brackets:

function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  } 
  
  console.log( sum(1)(2) ); // 3
  console.log( sum(5)(-1)(2) ); // 6
  console.log( sum(6)(-1)(-2)(-3) ); // 0
  console.log( sum(0)(1)(2)(3)(4)(5) ); // 15

  ///////////////////////////////////////////////////////////

  