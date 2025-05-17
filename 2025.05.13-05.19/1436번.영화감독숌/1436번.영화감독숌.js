const fs = require('fs');
const N = Number(fs.readFileSync('../../input.txt').toString().trim());

let number = 0;
let count = 0;
while (true) {
  ++number;
  if (number.toString().includes('666')) {
    ++count;
  }
  if (count === N) {
    break;
  }
}

console.log(number);
