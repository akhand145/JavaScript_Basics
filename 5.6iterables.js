//////////////////// Iterables ////////////////////////
// Iterable objects are a generalization of arrays. 
// That’s a concept that allows us to make any object useable in a for..of loop

// range[Symbol.iterator](), and its next() generates values for the iteration.

let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
  }

///////////// String is Iterable //////////////////////////////////////

for (let char of "test") {
    // triggers 4 times: once for each character
    console.log( char ); // t, then e, then s, then t
  }

/////////////// Calling an Iterator Explicity //////////////////////

let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}

//////////// Iterables and Array Likes [Array.from] ////////////

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  console.log(arr.pop()); // World (method works)

///////////////////////// str.from //////////////////////////////////

let str0 = '𝒳😂';

// splits str into array of characters
let chars0 = Array.from(str);

console.log(chars0[0]); // 𝒳
console.log(chars0[1]); // 😂
console.log(chars0.length); // 2

//////////////////////// array.split ///////////////////////////////

let str1 = '𝒳😂';

let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}

console.log(chars);

///////////////////////////////////////////////////////////////////
