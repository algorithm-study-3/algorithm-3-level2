const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const [N, M] = inputData[0].split(' ').map(Number);

let result = [];
const set = new Set();
for (let i = 1; i < N + 1; i++) {
  set.add(inputData[i]);
}
for (let i = N + 1; i < N + M + 1; i++) {
  if (set.has(inputData[i])) {
    result.push(inputData[i]);
  }
}

result = result.sort();

console.log(result.length);
console.log(result.join('\n'));
