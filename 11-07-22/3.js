// Q3. You need to tell me the occurrence of array element ['a', 'b', 'c', 'a', 'b', 'b']

const arr = ['a', 'b', 'c', 'a', 'b', 'b'];
const count = {};

for ( let index = 0; index < arr.length; index++) {
  const element = arr[index];

  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);
