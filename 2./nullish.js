let firstName = null;
let lastName = undefined;
let nickName = null;

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Any value


////////////////Precedence////////////////

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

console.log(area); // 5000