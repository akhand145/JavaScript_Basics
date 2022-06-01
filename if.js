1.///////////////////////////////////////////////////////////////////////////////////

if ("0") {
    console.log( 'Hello' );  // Hello, value will shown 
  }

2.//////////////////////////////////////////////////////////////////////////////////

let year = 'In which year was the ECMAScript-2015 specification published?';

if (year == 2015) {
  console.log( 'You guessed it right!' );
} else {
    console.log( 'How can you be so wrong?' ); // any value except 2015
}

3./////////////////////////////////////////////////////////////////////////////////

let value = 'Type a number';

if (value > 0) {
  console.log( 1 );
} else if (value < 0) {
  console.log( -1 );
} else {
  console.log( 0 );
}

4./////////////////////////////////////////////////////////////////////////////////

let a,b;

if (a + b < 4) {
  console.log('Below');
} else {
  console.log('Over');
}

5.////////////////////////////////////////////////////////////////////////////////

let login = "";
if (login == 'Employee') {
  console.log('Hello');
} else if (login == 'Director') {
  console.log('Greetings');
} else if (login == '') {
  console.log('No login');
} else {
  console.log('');
}
