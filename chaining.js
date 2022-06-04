//////////////////////// Chaining /////////////////////////////

let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)

///////////////////////////////////////////////////////////////

  let key = "firstName";

  let user1 = {
    firstName: "Mayank"
  };
  
  let user2 = null;
  
  console.log( user1?.[key] ); // Mayank
  console.log( user2?.[key] ); // undefined

///////////////////////////////////////////////////////////////