function sayHi() {
    console.log( "Hello" );
  }
  
  console.log('sayHi'); // shows the function code

///////////////////////////////////////////////////////////////////////

  function sayHi() {   //  create
    console.log( "Hello" );
  }
  
  let func = sayHi;    //  copy
  
  func(); // Hello     //  run the copy (it works)!
  sayHi(); // Hello    //     this still works too

//////////////////////////////////////////////////////////////////////

function ask(question, yes, no) {
    if (console.log(question)) yes()
    else no();
  }
  
  function showOk() {
    console.log( "You agreed." );
  }
  
  function showCancel() {
    console.log( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

////////////////////////////////////////////////////////////////////////

function ask(question, yes, no) {
    if (console.log(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
  );

////////////////////////////////////////////////////////////////////////

//// Function Expression Vs Function Declaration /////

//// Function Declaration
sayHi("John"); // Hello, John

function sayHi(name) {
  console.log( `Hello, ${name}` );
}

//// Function Expression
let sayHello = function(name) {  // (*) no magic any more
    sayHello("John"); // error!
  console.log( `Hello, ${name}` );
};

////////////////////////////////////////////////////////

let age = console.log("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    console.log("Hello!");
  }

} else {

  function welcome() {
    console.log("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined

///////////////////////////////////////////////////////////////

let age1 = console.log("What is your age?", 18);

let welcome1 = (age1 < 18) ?
  function() { console.log("Hello!"); } :
  function() { console.log("Greetings!"); };

  welcome1(); // ok now