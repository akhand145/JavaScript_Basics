///////////////////////// Promises //////////////////////////

let promise = new Promise(function(resolve, reject) {

    setTimeout(() => resolve("done"), 1000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

/////////////////////////// Tasks: /////////////////////////////

// 1. Re-resolve a promise ?

let promise1 = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});
promise1.then(console.log);


// 2. Delay with a promise

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('runs after 3 seconds'));


/////////////////////////////////////////////////////////////