///////////////////// The "new Function" Syntax ////////////////////////////

let sum = new Function('a', 'b', 'return a + b');
console.log( sum(1, 2) ); // 3

// Closure

function getFunc() {
    let value = "test";
  
    let func = new Function('console.log(value)');
  
    return func;
  }

  getFunc()(); // error: value is not defined
    
///////////////////////////////////////////////////
  
  function getFunc() {
    let value = "test";
  
    let func = function() { console.log(value); };
  
    return func;
  }
  
  getFunc()(); // "test", from the Lexical Environment of getFunction

////////////////////////////////////////////////////


  