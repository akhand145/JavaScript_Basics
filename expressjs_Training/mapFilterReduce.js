// Filter Function:

const arr = [5,1,3,2,6];

const output = arr.filter((x) => x < 3);

console.log(output);

// Reduce Function

// function findSum (arr) {
    
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++ ) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// const output1 = arr.reduce(function (acc, curr) {

//     acc = acc * curr;
//     return acc; 
// }, 1);

// console.log(output1);


const output1 = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output1);


// Map and Filter 

const users = [
    { firstname: "akshay", lastname: "Saini", age: 26 },
    { firstname: "donald", lastname: "trump", age: 75 },
    { firstname: "elon", lastname: "musk", age: 50 },
    { firstname: "deepika", lastname: "padukone", age: 26 },   
];

const output2 = 

users.filter((x) => x.age < 30)
.map((x) => x.firstname);

console.log(output2);