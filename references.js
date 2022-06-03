//// When an object variable is copied, the reference is copied //////////  

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

console.log(user); // 'Pete', changes are seen from the "user" reference

///////////////////////////////////////////////////////////////////////////

let a = {};
let b = a; // copy the reference

console.log( a == b ); // Output : true, both variables reference the same object
console.log( a === b ); // Output : true

//////////////////////////////////////////////////////////////////////////

let c = {};
let d = {}; // two independent objects

console.log( c == d ); // Output : false

/////////// Cloning and merging, Object.assign ///////////////////////////

let user1 = {
    name: "Dholu",
    age: 24
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user1 properties into it
  for (let key in user1) {
    clone[key] = user1[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  console.log( user1.name, clone.name ); // still Dholu Pete in the original object

/////////////////////////////////////////////////////////////////////////

let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
// Object.assign(user2, permissions1, permissions2);

// now user2 = { name: "John", canView: true, canEdit: true }
console.log(user2, permissions1, permissions2);  

        // { name: 'John' } { canView: true } { canEdit: true }

/////////////////////////////////////////////////////////////////////

let user3 = { name: "John" };

Object.assign(user3, { name: "Pete" });

console.log(user3.name); // now user3 = { name: "Pete" }

////////////////////////////////////////////////////////////////////

let user4 = {
    name: "Rohit",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  console.log( user4.sizes.height, user4.sizes.width ); // Output : 182 50

////////////////////////////////////////////////////////////////////

let user5 = {
    name: "Mohit",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone1 = Object.assign({}, user5);
  
  console.log( user5.sizes === clone1.sizes ); // true, same object
  
  // user and clone share sizes
  user5.sizes.width++;       // change a property from one place

  console.log( clone1.sizes.width ); // Output : 51
  

/////////////////////////////////////////////////////////////////////
  