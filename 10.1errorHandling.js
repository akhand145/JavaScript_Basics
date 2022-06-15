////////////////// Error Handling, "try...catch" /////////////////////

try {
    // code...
  } catch (err) {
    // error handling
  }

// First, the code in try {...} is executed.
// If there were no errors, then catch (err) is ignored.
// If an error occurs, then the try execution is stopped, 
// and control flows to the beginning of catch (err).

// Syntax

try {

    console.log('Start of try runs');  // (1) <--
  
    // ...no errors here
  
    console.log('End of try runs');   // (2) <--
  
  } catch (err) {
  
    console.log('Catch is ignored, because there are no errors'); // (3)
  
  }

//////////////////////////////////////////////////////

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  console.log( user.name ); // doesn't work

} catch (err) {
  // ...the execution jumps here
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( err.name );
  console.log( err.message );
}

// try...catch...finally

try {
    console.log( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
  } catch (err) {
    console.log( 'catch' );
  } finally {
    console.log( 'finally' );
  }


////////////////////////////////////////////////////////////


let num = console.log("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "error occurred");

console.log( `execution took ${diff}ms` );


/////////////////////// Tasks: //////////////////////////

// 1. Finally or just the code ?

function f() {
    try {
      console.log('start');
      return "result";
    } catch (err) {
      /// ...
    } finally {
      console.log('cleanup!');
    }
  }
  
  f(); // cleanup!

//////////////////////////////////////////////////////
