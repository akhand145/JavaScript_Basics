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
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);


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


// let j = 1;
// setTimeout(function run() {
//   func(j++);
//   setTimeout(run, 100);
// }, 100);

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) console.log(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

// an example of the output:
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100


//////////////////////////// Tasks : ////////////////////////////////

// 1. Output every second
// using setInterval:

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);

// using nested setTimeout:

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

// usage:
printNumbers(5, 10);


// 2. what will setTimeout show ?

// After the loop.
// Before the loop.
// In the beginning of the loop.


let i = 0;

setTimeout(() => console.log(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}

/////////////////////////////////////////////////////////////////
