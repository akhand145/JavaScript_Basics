///////////////// Property getters and setters ///////////////////

// Accessor properties are represented by “getter” and “setter” methods.

let obj = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  }
};

// 

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

console.log(user.fullName); // John Smith

//////////////////////////////////////////////////

let user1 = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user1.fullName = "Alice Cooper";

console.log(user1.name); // Alice
console.log(user1.surname); // Cooper


/////////////////// Accessor Descriptors ////////////////////

// get – a function without arguments, that works when a property is read,
// set – a function with one argument, that is called when the property is set,
// enumerable – same as for data properties,
// configurable – same as for data properties.

let user2 = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user2, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(user2.fullName); // John Smith

for(let key in user) console.log(key); // name, surname


////////////////////// Smarter getter/setters /////////////////////////

let user3 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Name is too short...


///////////////////// Using for Compatibility ///////////////////////

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);

console.log( john.name ); // John
console.log( john.age ); // 25


//////////////////// Smarter getters/setters //////////////////////

let user4 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user4.name = "Pete";
console.log(user4.name); // Pete
user4.name = ""; // Name is too short...

///////////////////////////////////////////////////////////////////////////