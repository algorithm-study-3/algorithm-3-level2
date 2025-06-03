const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const order = inputData[1].split(' ').map(Number);
const sortedOrder = order.sort((a, b) => a - b);

let result = 0;
let count = sortedOrder.length;
for (let i = 0; i < sortedOrder.length; i++) {
  result += sortedOrder[i] * count;
  --count;
}

console.log(result);
