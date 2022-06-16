//////////////////// Property Flags and Descriptors ///////////////////////

// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, 
// otherwise not.

// The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

/////////////////////////// Property Flags ////////////////////////////////
// obj : The object to get information from.
// propertyName : The name of the property.

let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 4 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */

/////////////////////// Non-writable //////////////////////////

  let user1 = { };

Object.defineProperty(user1, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

console.log(user1.name); // John
user1.name = "Pete"; // Error

///////////////////// Non-enumerable /////////////////////////

let user2 = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  Object.defineProperty(user2, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user2) console.log(key); // name
  
///////////////////// Non-configurable ////////////////////////

let descriptor1 = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log( JSON.stringify(descriptor1, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

////////////////////// object.defineProperties /////////////////////

// Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
//     // ...
//   });

////////////////// object.getOwnPropertyDescriptors(obj) ////////////////

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

////////////////// Sealing an object globally ///////////////////

// Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.

// Object.seal(obj)
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.

// Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.

// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.

// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.


