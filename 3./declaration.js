///////// Define Function Declarartion////////

function showMessage() {
    console.log('Hello World !');
}

showMessage();
showMessage();

//////////////////Local Variables//////////////

let message;
function showMessage1() {
    let message = "Hello, I am JS !";
    console.log(message);
}

showMessage1();
console.log(message);

////////////////Outer Variable/////////////////////


let userName = 'John';

function showMessage2() {
  let message1 = 'Hello, ' + userName;
  console.log(message1);
}

showMessage2(); // Hello, John

///////////////////////////////////////////////////

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

///////////////////////////////////////////////////