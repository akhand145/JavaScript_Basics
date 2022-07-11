// let n = 5;

// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j >= n+i ; j++) {
//     process.stdout.write(' ');
//   }
//   // printing star
//   for (let k = 0; k <= n+i; k++) {
//     process.stdout.write('* ');
//   }
//   console.log();
// }

let n = 5;

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n-i ; j++) {
    process.stdout.write(' ');
  }
  // printing star
  for (let k = i; k > 0; k--) {
    process.stdout.write('* ');
  }
  console.log();
}
