let n = 5;

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= i; j++) {
    process.stdout.write(' ');
  }
  // printing star
  for (let k = 1; k <= i; k++) {
    process.stdout.write('*');
  }
  console.log();
}