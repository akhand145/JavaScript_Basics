/////////////////////// Recursion and Stack /////////////////////////////

// When a function call itself is called Recursion 

function pow(x, n) {
    let result = 1;
  
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log( pow(2, 3) ); // 8

///////////////////////////////////////////////////

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8


//////////////////////// Recursive Traversal ////////////////////////////

let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };
  
  // The function to do the job
  function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
      }
      return sum;
    }
  }
  
  console.log(sumSalaries(company)); // 7700

////////////////////////// Recursive Structures ////////////////////////////

// A recursive (recursively-defined) data structure is a structure that replicates itself 
// in parts.

/////////////////////////// Tasks : ///////////////////////////////

// 1. Sum of all numbers till the given one:
// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo(100) );

// 2. Calculate Factorial /////////////////////////////////////////////////////

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(5) ); // 120

// 3. Fibonacci Numbers //////////////////////////////////////////////////////

function fib(n) {
  return n <= 1 ? n : fib(n-1) + fib(n-2);
}

console.log( fib(3) );  // 2
console.log( fib(7) );  // 13
console.log( fib(77) );  // Not Working

//////////////////////////////////////////////////////////////////////////////

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77) ); // 5527939700884757

// 4. /////////////// Output a single-linked list ///////////////////////////////

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  console.log(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);

// 5. ////////// Output a single-linked list in reverse order //////////////////

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list2) {

  if (list2.next) {
    printReverseList(list2.next);
  }

  console.log(list2.value);
}

printReverseList(list2);

//////////////////////////////////////////////////////////////////////////