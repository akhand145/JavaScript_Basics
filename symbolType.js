///////////////////////////////////////////////

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

///////////////////////////////////////////////

let user = { // belongs to another code
    name: "Rohit"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  console.log( user[id] ); // we can access the data using the symbol as the key

////////////////////////////////////////////////

// read from the global registry
let no = Symbol.for("no"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let noAgain = Symbol.for("no");

// the same symbol
console.log( no === noAgain ); // true

///////////////////////////////////////////////////

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id

///////////////////////////////////////////////////

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description ); // name

////////////////////////////////////////////////////