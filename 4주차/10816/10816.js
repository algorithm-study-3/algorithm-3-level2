// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;

const [N, nInput, M, mInput] = readLine.split("\n");

const obj = {};

mInput.split(" ").forEach((input) => {
  obj[input] = 0;
});

nInput.split(" ").forEach((input) => {
  if (obj[input] !== undefined) {
    obj[input] = obj[input] + 1;
  }
});

console.log(
  mInput
    .split(" ")
    .map((input) => obj[input])
    .join(" ")
);
