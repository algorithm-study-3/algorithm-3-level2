const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const [width, height] = inputData[0].split(' ').map(Number);
const N = Number(inputData[1]);
const x = [0, width];
const y = [0, height];
for (let i = 0; i < N; i++) {
  const [side, num] = inputData[i + 2].split(' ').map(Number);
  if (side === 0) {
    y.push(num);
  } else if (side === 1) {
    x.push(num);
  }
}

x.sort((a, b) => a - b);
y.sort((a, b) => a - b);

let w = 0;
let h = 0;
for (let i = 1; i < x.length; i++) {
  let temp = x[i] - x[i - 1];
  w = Math.max(w, temp);
}
for (let i = 1; i < y.length; i++) {
  let temp = y[i] - y[i - 1];
  h = Math.max(h, temp);
}

console.log(w * h);
