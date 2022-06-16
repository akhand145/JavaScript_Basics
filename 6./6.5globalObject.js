//////////////////////// Global Object ///////////////////////////////

// The global object provides variables and functions that are available anywhere.

// make current user information global, to let all scripts access it

// window.currentUser = {
//     name: "Rohan"
//   };
  
//   // somewhere else in code
//   console.log(currentUser.name);  // Rohan
  
//   // or, if we have a local variable with the name "currentUser"
//   // get it from window explicitly (safe!)
//   console.log(window.currentUser.name); // Rohan

// In-browser, unless we’re using modules, global functions and variables declared with var 
// become a property of the global object.

// To make our code future-proof and easier to understand, we should access properties of 
// the global object directly, as window.x.


  