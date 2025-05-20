const fs = require('fs');
const inputData = Number(fs.readFileSync('./dev/stdin').toString().trim());

const numbers = Array.from({ length: inputData }, (v, i) => i + 1);

const result = [];
while (numbers.length !== 0) {
  result.push(numbers.shift());
  if (numbers.length !== 0) {
    const temp = numbers.shift();
    numbers.push(temp);
  }
}

console.log(result.join(' '));
