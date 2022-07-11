let n = 5;

for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ');
  }
  // printing star
  for (let k = 0; k < i; k++) {
    process.stdout.write('*');
  }
  console.log();
}