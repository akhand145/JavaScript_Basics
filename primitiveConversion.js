/////////// Primitive Conversion ////////////
/////////// Symbol.toPrimitive /////////////

let user = {
    name: "Mohit",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(user); // hint: string -> {name: "Mohit"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500

///////////// toString/valueOf /////////////////////////////

let user1 = {
    name: "Rohit",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log(user1); // toString -> {name: "Rohit"}
  console.log(+user1); // valueOf -> 1000
  console.log(user1 + 500); // valueOf -> 1500

//////////////////////////////////////////////////////

let user2 = {
    name: "Rahul",
  
    toString() {
      return this.name;
    }
  };
  
  console.log(user2); // toString -> Rahul
  console.log(user2 + 500); // toString -> Rahul500

///////////////////////////////////////////////////////////////////////

  let obj1 = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
  };
  
  console.log(obj1 * 2); // 4, object converted to primitive "2"

///////////////////////////////////////////////////////////////////////
  