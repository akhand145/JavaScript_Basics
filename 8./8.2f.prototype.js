//////////////////////////// F.prototype //////////////////////////////////

let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }
  
  Rabbit.prototype = animal;
  
  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
  console.log( rabbit.eats ); // true

//////////////////// Default F.prototype, constructor property ////////////////

function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit1 = new Rabbit();
console.log(rabbit1.constructor === Rabbit); // false

//////////////////////////////// Tasks: ////////////////////////////////////////

// 1. Changing Prototype

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit2 = new Rabbit();

Rabbit.prototype = {};
console.log( rabbit2.eats ); // ?


// 2. Create an object with same Constructor

function User(name) {
    this.name = name;
  }
  
  let user = new User('John');
  let user2 = new user.constructor('Pete');
  
  console.log( user2.name ); // Pete (worked!)

/////////////////////////////////////////////////////