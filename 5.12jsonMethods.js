/////////////////// JSON Methods, toJSON /////////////////////////////

let user = {
    name: "Rahul",
    age: 25,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`
    }
};
console.log(user);

///////////////////////// JSON.stringfy ////////////////////////////////
// The JSON (JavaScript Object Notation) is a general format to represent values and objects.

// JavaScript provides two methods:

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.


let student = {
    name: 'Rohit',
    age: 25,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);
/* JSON-encoded object:
{
  "name": "Rohit",
  "age": 25,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// The method JSON.stringify(student) takes the object and converts it into a string.

// JSON.stringify can be applied to primitives as well.

// JSON supports following data types:

// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.

// a number in JSON is just a number
console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

/////////////////////////////////////////////////////////////

let meetup = {
    title: "Conference",
    room: {
        Number: 23,
        participants: ["Rahul", "Raman"]
    }
};

console.log( JSON.stringify(meetup) );
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/

let room = {
    number: 23
  };
  
  let meetup1 = {
    title: "Conference",
    participants: ["Rahul", "Raman"],
    // place: room
  };
  
meetup.place = room;
room.occupiedBy = meetup1;

JSON.stringify( meetup1 );

console.log( JSON.stringify( meetup1 ));


// Excluding and Transforming: replacer
// let json = JSON.stringify(value[, replacer, space])

// value : A value to encode.
// replacer : Array of properties to encode or a mapping function function(key, value).
// space : Amount of space to use for formatting


room.occupiedBy = meetup1;
console.log( JSON.stringify(meetup1, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

// console.log( JSON.stringify(meetup1, ['title', 'participants', 'place', 'name', 'number']) );


///////////////////// Formatting Space /////////////////////////////

let user3 = {
    name: "Rohit",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  console.log(JSON.stringify(user3, null, 2));

////////////////////// Custom "toJSON" /////////////////////////////

let room2 = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup2 = {
    title: "Conference",
    room2
  };
  
  console.log( JSON.stringify(room2) ); // 23  
  console.log( JSON.stringify(meetup2) );


///////////////////////////// JSON.parse ////////////////////////////

// str : JSON-string to parse.
// reviver : Optional function(key,value) that will be called for each (key, value) pair 
// and can transform the value.

// for stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log( numbers [1] ); // 1

// for nested objects
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user4 = JSON.parse(userData);

console.log( user4.friends[1] ); // 1


///////////////////////////// using reviver //////////////////////////////

let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
  
  schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
  
  console.log( schedule.meetups[1].date.getDate() ); // works!



/////////////////////////// Tasks : ////////////////////////////////

// 1. 
let user1 = {
    name: "John Smith",
    age : 35
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user1);


// 2. Exclude Backrefernces ////////////////////////////////////////////

let room4 = {
    number: 23
  };
  
  let meetup4 = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room4
  };

// circular references
room4.occupiedBy = meetup4;
meetup4.self = meetup4;  

console.log( JSON.stringify(meetup4, function replacer(key, value) {
    return (key != "" && value == meetup4) ? undefined : value;
}));

/*
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

////////////////////////////////////////////////////////////////////////