//////////////// Prototype methods, objects without__proto__ //////////////////

// Object.create(proto, [descriptors]) – creates an empty object with given proto as 
// [[Prototype]] and optional property descriptors.
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

let animal = {
    eats: true
  };
  
  // create a new object with animal as a prototype
  let rabbit = Object.create(animal);
  
  console.log(rabbit.eats); // true  
  console.log(Object.getPrototypeOf(rabbit) === animal); // true
  
  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}


////////////////////////////// Tasks: ///////////////////////////////////////

// 1. Add toString to the dictionary

let dictionary = Object.create(null, {
    toString: { // define toString property
      value() { // the value is a function
        return Object.keys(this).join();
      }
    }
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";
  
  // apple and __proto__ is in the loop
  for(let key in dictionary) {
    console.log(key); // "apple", then "__proto__"
  }
  
  // comma-separated list of properties by toString
  console.log(dictionary); // "apple,__proto__"


// 2. The difference between calls

function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log( this.name );
  }
  
  let rabbit1 = new Rabbit("Rabbit");
  
  rabbit1.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
  Object.getPrototypeOf(rabbit1).sayHi(); // undefined
  rabbit1.__proto__.sayHi();              // undefined

/////////////////////////////////////////////////////////////////////