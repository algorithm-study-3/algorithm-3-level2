const fs = require('fs');
let [A, B] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let divisor = 1;
let multiple = 1;
let count = 2;
while (count <= A && count <= B) {
  if (A % count === 0 && B % count === 0) {
    divisor *= count;
    multiple *= count;
    A = A / count;
    B = B / count;
  } else {
    ++count;
  }
}
multiple *= A * B;

console.log(divisor);
console.log(multiple);
