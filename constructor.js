function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Rohit");
  
  console.log(user.name); // Rohit
  console.log(user.isAdmin); // false

//////////////////////////////////////////////////////

function user1(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
  }
  
  let rohan = user1("Rohan"); // redirects call to new User
  console.log(rohan.name); // Rohan

//////////////////////////////////////////////////////////

function BigUser() {

    this.name = "Rohit";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  console.log( new BigUser().name );  // Godzilla, got that object

/////////////////////////////////////////////////////////////

function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
//////////////////////////////////////////////////////////////

let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() ); // true

/////////////////////////////////////////////////////////////

function Calculator() {

    this.read = function() {
      this.a = console.log('a');
      this.b = console.log('b');
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  console.log( "Sum=" + calculator.sum() );
  console.log( "Mul=" + calculator.mul() );

//////////////////////////////////////////////////////////

