///////////////////// Class Inheritance ///////////////////////

// The "extend" keyword:

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

//////////////////////////////////////////////////////////////////

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!


// Overriding a method:

class Animal1 {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit1 extends Animal1 {
    hide() {
      console.log(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit1 = new Rabbit1("White Rabbit");
  
  rabbit1.run(5); // White Rabbit runs with speed 5.
  rabbit1.stop(); // White Rabbit stands still. White Rabbit hides!.


// Overriding Constructor

class Animal2 {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
  class Rabbit2 extends Animal2 {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    // ...
  }
  
  // now fine
  let rabbit2 = new Rabbit2("White Rabbit", 10);
  console.log(rabbit2.name); // White Rabbit
  console.log(rabbit2.earLength); // 10


///////////////////////////// Tasks: /////////////////////////////////

// 1. Error creating an instance

class Animal3 {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit3 extends Animal3 {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit3 = new Rabbit3("White Rabbit"); // ok now
  console.log(rabbit3.name); // White Rabbit


///////////////////////////////////////////////////////////