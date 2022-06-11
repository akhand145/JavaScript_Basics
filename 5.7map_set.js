/////////////// Map and Set ////////////////
// Map is a collection of keyed data items, just like an object
// But Map allows keys of any type 

// new Map() : Creates the map
// map.set(key, value) : stores the value by the key 
// map.get(key) : Returns the value by the key 
// map.has(key) : Returns true if the key exists, otherwise false
// map.delete(key) : Removes the value by the key
// map.clear() : Removes everything from the map
// map.size : Returns the current element count 

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.size ); // 3

////////// Iteration over Map //////////

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value].


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }
  

//////////////// Object.entries: Map from Object //////////////////////

  let obj = {
    name: "Rohit",
    age: 25
  };
  
  let map1 = new Map(Object.entries(obj));  
  console.log( map1.get('name') ); // Rohit

///////////////// object.fromEntries : Object from Map /////////////////

let map2 = new Map();
map2.set('banana', 1);
map2.set('orange', 2);
map2.set('meat', 4);

let obj1 = Object.fromEntries(map2.entries()); // make a plain object (*)
console.log(obj1.orange); // 2


//////////////////////////// Set ///////////////////////////////////////
// A set is a special type collection - "Set of Values"
// where each value may occur only once 

// new Set(iterable) – creates the set, and if an iterable object is provided, 
// copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment 
// of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

//////////////////////////// Set the Values ///////////////////////////////////


let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

//////////////////////////// Tasks /////////////////////////////////////////

// 1. 
function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) ); // Hare, Krishna, :-O
  // This returns the value at single time

//////////////////////// Filter Anagrams //////////////////////////////////
// 2. Anagrams are words that have the same number of same letters, but in different order

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];  
  console.log( aclean(arr) );


// 3. Iterable Keys /////////////////////////////////////////////////////////

let map3 = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");

console.log(keys); // name, more

