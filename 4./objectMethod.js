////////// Object Methods //////////
let user = {
  name: "Rahul",
  age: 25
};

user.sayHi = function() {
  console.log("Hello!");
};

user.sayHi(); // Output : Hello!

///////////////////////////////////

let user1 = {
  // ...
};

// first, declare
function sayHi() {
  console.log("Hello!");
}

// then add as a method
user1.sayHi = sayHi;

user1.sayHi(); //  Output : Hello!

//////////////////////////////////////////////

function makeUser() {
  return {
    name: "Rahul",
    ref: this
  };
}

let user2 = makeUser();

console.log( user2.ref.name ); // undefined

/////////////////////////////////////////////////////

function makeUser() {
  return {
    name: "Raman",
    ref() {
      return this;
    }
  };
}

let user3 = makeUser();

console.log( user3.ref().name ); // Output : Raman

///////////////////////////////////////////////////////

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = console.log('a');
    this.b = console.log('b');
  }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

//////////////////////////////////////////////

let user4 = { name: "Rahul" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user4.f = sayHi;
admin.f = sayHi;

// "this" inside the function is the object "before the dot"
user4.f(); // Rahul  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin 

/////////////////////////////////////////////////////////////