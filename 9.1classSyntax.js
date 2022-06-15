/////////////////////// The Class Syntax ///////////////////////////

class User {
    constructor(name) {
        this.name = name;
    }   
    sayHi() {
        console.log(this.name);
    }
}

let user = new User("John");
user.sayHi();

///////////////////////////////////////////////////////////

  // class is a function
  console.log(typeof User); // function
  
  // ...or, more precisely, the constructor method
  console.log(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  console.log(User.prototype.sayHi); // the code of the sayHi method
  
  // there are exactly two methods in the prototype
  console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/////////////////////// Not just a Syntactic Sugar /////////////////////////

// syntax that is designed to make things easier to read, but doesn’t introduce anything new

// Class Expression

let user1 = class {
    sayHi() {
      console.log("Hello");
    }
  };
  

// Getters/Setters

class User2 {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user2 = new User2("John");
console.log(user2.name); // John

user2 = new User2(""); // Name is too short.


// Computed Fields:

class User3 {
  name = "John";

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User3().sayHi(); // Hello, John!


/////////////////////////// Tasks: ////////////////////////////////

// 1.  Rewrite to class

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();
clock.stop();

////////////////////////////////////////////////////////////////////