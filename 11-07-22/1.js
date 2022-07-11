// Q1. You've a range of 0-5. You need to find the missing number in  this array [4,3,1,0,5]

let arr = [ 4,3,1,0,5 ];

function getMissingNo(arr, n) {
  
    let total = Math.floor((n) * (n + 1) / 2);
    for ( i = 0; i < n; i++)
        total -= arr[i];
    return total;
}

// get the Missing Number

let n = arr.length;
let missing = getMissingNo(arr, n);
console.log(missing);
