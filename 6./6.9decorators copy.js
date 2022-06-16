////////////////// Decorators and forwarding, call/apply //////////////////

////////////////////////// Tasks : //////////////////////////////

// 1. spy Deorator

function spy(func) {
    console.log( a + b ); // work is an arbitrary function or method

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    
    for (let args of work.calls) {
        console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
      }
    wrapper.calls = [];
    
    return wrapper;
  }


// 2. Delaying Decorator

function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
  }
  
  let f1000 = delay(console.log, 1000);
  
  f1000("test"); // shows "test" after 1000ms


// 3. Debounce Decorator 

function debounce(func, ms) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
  }


// 4. Throttle Decorator

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments); // (1)

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}