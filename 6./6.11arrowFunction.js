///////////////////// Arrow Function revisited ////////////////////////

// arr.forEach(func) – func is executed by forEach for every array item.
// setTimeout(func) – func is executed by the built-in scheduler.

// Arrow functions have no "this"

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();

// Arrow have no "arguments"

function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(who) {
    console.log('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // Hello, John after 2 seconds

///////////////////////////////////////////////////////////////////