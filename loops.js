/////////////////////Example of while/////////////////////

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

/////////////////////Do-while////////////////////////////

let j = 0;
do {
  console.log( j );
  j++;
} while (j < 3);

/////////////////////For Loop////////////////////////////

for (let k = 0; k < 3; k++) { // shows 0, then 1, then 2
    console.log(k);
  }


////////////Defining For Loop///////////////////////////
let p = 0;

for (p = 0; p < 3; p++) { // use an existing variable
  console.log(p); // 0, 1, 2
}

console.log(p); // 3, visible, because declared outside of the loop


////////////////////////////////////////////////////////

let q = 0;

for (; q < 3;) {
  console.log( q++ );
}


////////////////////////////////////////////////////////

let sum = 0;

while (true) {

  let value = console.log("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );

/////////////////////////////////////////////////////////

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}

//////////////////////////////////////////////////////////////

for (let k= 2; k<= 10; k++) {
  if(k % 2 == 0) {
    console.log( k );
  }
}

//////////////////////////////////////////////////////////////

let l = 3;

while (l) {
  console.log( l-- );   ////// Output -> 3,2,1
}

///////////////////////////////////////////////////////////////

let m = 0;
while (++m < 5) console.log( m );   /////// Output -> 1234

//////////////////////////////////////////////////////////////

let n = 0;
while (n++ < 5) console.log( n );   /////// Output -> 12345

//////////////////////////////////////////////////////////////

for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}

/////////////////////////////////////////////////////////////

let num;

do {
  num = console.log("Enter a number greater than 100?");  //// Enter a number greater than 100?
} while (num <= 100 && num);

////////////////////////////////////////////////////////////