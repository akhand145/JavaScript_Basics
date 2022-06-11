//////////////// Scheduling : setTimeout and setInterval ////////////////

// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time,
//  then repeating continuously at that interval.

///////////////////////////// setTimeout ///////////////////////////////////

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)


setTimeout(() => console.log('Hello'), 1000);

function sayHi() {
    console.log('Hello');
  }
  
  setTimeout(sayHi, 1000); // this shows Hello after one second.

//////////////////////////////////

  function sayHi1(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi1, 1000, "Hello", "John"); // Hello, John


///////////////////////////// setInterval //////////////////////////////////

// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 9000);


//////////////////////// Nested setTimeout /////////////////////////////////


// let timerId1 = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

// The nested setTimeout is a more flexible method than setInterval

// Nested setTimeout allows to set the delay between the executions more precisely 
// than setInterval.


// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);


let j = 1;
setTimeout(function run() {
  func(j++);
  setTimeout(run, 100);
}, 100);

