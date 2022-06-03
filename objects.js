//////////// Using of Objects as a Variable /////////////

let user = {     // an object
    name: "Mohit",  // by key "name" store value "Mohit"
    age: 25       // by key "age" store value 25
  };
  console.log(user);  // Output : { name: 'Mohit', age: 25 }

////////////////////////////////////////////////////////

let user1 = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };
  console.log(user1);

////////////////////////////////////////////////////////

let fruit = console.log("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is fruit
};

console.log( bag ); // 5 if fruit = "apple"

////////////// Property Value Shorthand ////////////////

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user2 = makeUser("Mayank", 20);
  console.log(user2.name, user2.age); // Output : Mayank 20

/////////////////////////////////////////////////////////

///////// Property Name Limitations/////////
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  console.log( obj.for + obj.let + obj.return );  // Output : 6

///////// Example of the property does exist and undefined //////////

let obj1 = {
    test: undefined
  };
  
  console.log( obj1.test ); // it's undefined, so - no such property?
  
  console.log( "test" in obj1 ); // true, the property does exist!

/////////////// for...in Loop ////////////////////////////////////

let user3 = {
    name: "Raman",
    age: 20,
    isAdmin: true
  };
  
  for (let key in user3) {
    // keys
    console.log( key );  // name, age, isAdmin
    // values for the keys
    console.log( user3[key] ); // Raman, 20, true
  }

/////////// Ordered like an object //////////////////////////////

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    console.log(code); // Output : 1, 41, 44, 49
  }

///////////////////////////////////////////////////////////

let user4 = {
    name: "John",
    surname: "Smith"
  };
  user4.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user4) {
    console.log( prop ); // Output : name, surname, age
  }
  console.log( user4 );  // Output : { name: 'John', surname: 'Smith', age: 25 }
  
///////////////////////////////////////////////////////////