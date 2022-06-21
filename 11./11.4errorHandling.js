///////////////// Error Handling with Promises //////////////////

new Promise((resolve, reject) => {

    throw new Error("Whoops!");
  
  }).catch(function(error) {
  
    console.log("The error is handled, continue normally");
  
  }).then(() => console.log("Next successful handler runs"));


///////////////////////////////////////////////////////////////

let promise = Promise.resolve();
promise.then(() => console.log("promise done!"));

console.log("code finished"); // this alert shows first

///////////////////////////////////////////////////////////////

