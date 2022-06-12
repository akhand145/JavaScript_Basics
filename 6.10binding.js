////////////////////// Function Binding /////////////////////////////

let user = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Hello, undefined!

/////////////////////////// wrapper ///////////////////////////////

let user1 = {
    firstName: "John",
    sayHi() {
      console.log(`Hello, ${this.firstName}!`);
    }
  };
  
  setTimeout(function() {
    user1.sayHi(); // Hello, John!
  }, 1000);

///////////////////////// Bind Function ///////////////////////////

let user2 = {
    firstName: "John"
  };
  
  function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
  }
  
  // bind this to user
  let funcUser = func.bind(user1);
  
  funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)


////////////////////// Partial Function //////////////////////////

function mul(a, b) {
    return a * b;
  }
  
  let double = mul.bind(null, 2);
  
  console.log( double(3) ); // = mul(2, 3) = 6
  console.log( double(4) ); // = mul(2, 4) = 8
  console.log( double(5) ); // = mul(2, 5) = 10


/////////////////// Going Partial without Context //////////////////

function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }
  
  // Usage:
  let user3 = {
    firstName: "John",
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };
  
  // add a partial method with fixed time
  user3.sayNow = partial(user3.say, new Date().getHours() + ':' + new Date().getMinutes());
  
  user3.sayNow("Hello");
  // Something like:
  // [10:00] John: Hello!


/////////////////////////////// Tasks: /////////////////////////////////

// 1. Bound function as a method 

function f() {
    console.log( this ); // null
  }
  
  let user4 = {
    g: f.bind(null)
  };
  
  user4.g();

// 2. Second Bind 

function f() {
    console.log(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
  
  f(); // John


// 3. Function Property after Bind

function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  console.log( bound.test ); // what will be the output? why?


// 4. Fix a function that losses "this"

function askPassword(ok, fail) {
    let password = console.log("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user5 = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user5.loginOk.bind(user5), user5.loginFail.bind(user5));


// 5. Partial application for Login

function askPassword(ok, fail) {
    let password = console.log("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user6 = {
    name: 'John',
  
    login(result) {
      console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(user6.login.bind(user6, true), user6.login.bind(user6, false));

  
//////////////////////////////////////////////////////////////////////////////////