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
    place: room
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



/////////////////////////// Tasks : ////////////////////////////////

// 1. 
let user1 = {
    name: "John Smith",
    age : 35
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user1);