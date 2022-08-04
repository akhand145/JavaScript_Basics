// Promises .then() .catch()
// function func1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const err = false;
//             if (!err) {
//                 console.log("Your Promise has been resolved");
//                 resolve();
//             } else {
//                 console.log("Your Promise has not been resolved");
//                 reject(' Sorry not fufilled ');
//             }
//         }, 2000);
//     });
// }

// func1().then(() => {
//     console.log("Node : Thanks for resolving");
// }).catch((err) => {
//     console.log("Very bad for No Response," + err);
// });


// Async and Await
// async function javascript() {
//     console.log("Inside Javascript function");

//     const response = await fetch('https://api.github.com/users');
//     console.log("Before Response");
//     const users = await response.json();
//     console.log("Users Resolved");
//     return users;
// }

// console.log("Before calling");
// let a = javascript();
// console.log("After calling");
// console.log(a);
// a.then(data => console.log(data));
// console.log("Last line");


// Call, Apply and Bind
// let name1 = {
//     firstname : "Node",
//     lastname : "JS",
// }

// let printFullName = function (hometown, state) {
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
// }

// printFullName.call(name1, "JavaScript", "JS");


// let name2 = {
//     firstname : "MySQL",
//     lastname : "DB"
// }

// // call
// console.log("Call Function");
// printFullName.call(name2, "JavaScript", "JS");
// // Apply
// console.log("Apply Function");
// printFullName.apply(name2, ["JavaScript", "JS"]);
// // Bind
// console.log("Bind Function");
// let printMyName = printFullName.bind(name2, "JavaScript", "JS");
// printMyName();


// Hoisting
// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName () {
//     console.log("JavaScript");
// }


// Closures 
// let z = () => {
//     let b = 90;
//     let x = () => {
//         let a = 7;
//         let y = () => {
//             console.log(a, b, c);
//         }
//         let c = 25;
//         y();
//     }
//     x();    
// }
// z();


// find Greatest Number:
function greatestNo() {
    return new Promise((resolve, reject) => {   
            const err = false;
            const num1 = 5;
            const num2 = 8;
            const num3 = 7;
            if (!err) {
                const largest = Math.max(num1, num2, num3);
                console.log("The largest number is " + largest);
                resolve();
            } else {
                console.log("Your Promise has not been resolved");
                reject();
            }
    });
}

greatestNo().then(() => {
    console.log("Thanks for resolving ");
}).catch((err) => {
    console.log("No Response", err);
});

