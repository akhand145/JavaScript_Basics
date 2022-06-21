/////////////////////// Generators ////////////////////////

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let generator = generateSequence();
  
  for(let value of generator) {
    console.log(value); // 1, 2, 3
  }

//////////////////////////////////////////////////////////

  function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    console.log(ask1); // 4
  
    let ask2 = yield "3 * 3 = ?"
  
    console.log(ask2); // 9
  }
  
  let generator1 = gen();
  
  console.log( generator1.next().value ); // "2 + 2 = ?"
  
  console.log( generator1.next(4).value ); // "3 * 3 = ?"
  
  console.log( generator1.next(9).done ); // true


/////////////////////// Task1: /////////////////////////////

  function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647
      yield value;
    }
  
  };
  
  let generator2 = pseudoRandom(1);
  
  console.log(generator2.next().value); // 16807
  console.log(generator2.next().value); // 282475249
  console.log(generator2.next().value); // 1622650073

///////////////////////////////////////////////////////////