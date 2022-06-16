////////////////////////// Prototypal Inheritance ///////////////////////////

let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // we can find both properties in rabbit now:
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps ); // true

/////////////////////////////////////////////////////

  let animal1 = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit1 = {
    jumps: true,
    __proto__: animal1
  };
  
  // walk is taken from the prototype
  rabbit1.walk(); // Animal walk

//////////////////////////////////////////////

let animal2 = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit2 = {
    jumps: true,
    __proto__: animal2
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit2
  };
  
  // walk is taken from the prototype chain
  longEar.walk(); // Animal walk
  console.log(longEar.jumps); // true (from rabbit)

////////////////////////////////////////////////////

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  console.log(admin.fullName); // Alice Cooper, state of admin modified
  console.log(user.fullName); // John Smith, state of user protected


///////////////////// The value of "this" ///////////////////////

// animal has methods
let animal3 = {
  walk() {
    if (!this.isSleeping) {
      console.log(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit3 = {
  name: "White Rabbit",
  __proto__: animal3
};

// modifies rabbit.isSleeping
rabbit3.sleep();

console.log(rabbit3.isSleeping); // true
console.log(animal3.isSleeping); // undefined (no such property in the prototype)


///////////////////////// for...in loop /////////////////////////////

let animal4 = {
    eats: true
  };
  
  let rabbit4 = {
    jumps: true,
    __proto__: animal4
  };
  
  // Object.keys only returns own keys
  console.log(Object.keys(rabbit4)); // jumps
  
  // for..in loops over both own and inherited keys
  for(let prop in rabbit) console.log(prop); // jumps, then eats


///////////////////////////////////////////////////////////////////

  let animal5 = {
    eats: true
  };
  
  let rabbit5 = {
    jumps: true,
    __proto__: animal
  };
  
  for(let prop in rabbit5) {
    let isOwn = rabbit5.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }
  

////////////////////////////// Tasks: ///////////////////////////////////////

// 1. Working with Prototype

let animal6 = {
    jumps: null
  };
  let rabbit6 = {
    __proto__: animal6,
    jumps: true
  };
  
  console.log( rabbit6.jumps ); // ? (1)
  
  delete rabbit6.jumps;
  
  console.log( rabbit6.jumps ); // ? (2)
  
  delete animal6.jumps;
  
  console.log( rabbit6.jumps ); // ? (3)


// 2. Searching Algorithm

  let head = {
    glasses: 1
  };
  
  let table = {
    __proto__ : head,
    pen: 3
  };
  
  let bed = {
    __proto__ : table,
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    __proto__ : bed,
    money: 2000
  };

  console.log(pockets.pen); // 3
  console.log(bed.glasses); // 1


// 3. Where does it write ?

let animal7 = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit7 = {
    __proto__: animal7
  };
  
  rabbit7.eat();


// 4. Why are both hamsters full ?

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

///////////////////////////////////////////////////