///////////////////// WeakMap and WeakSet //////////////////////////

// WeakMap is Map-like collection that allows only objects as keys and removes them 
// together with associated value once they become inaccessible by other means.

// WeakSet is Set-like collection that stores only objects and removes them 
// once they become inaccessible by other means.

/////////////////////// Tasks ///////////////////////////////
// 1.

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
    
  readMessages.add(messages[0]);
 
  console.log("Read message 0: " + readMessages.has(messages[0])); // true  
  messages.shift();

// 2.

let messages1 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages1[0], new Date(2017, 1, 1));
  // Date object we'll study later

////////////////////////////////////////////////////////////////////////////
  