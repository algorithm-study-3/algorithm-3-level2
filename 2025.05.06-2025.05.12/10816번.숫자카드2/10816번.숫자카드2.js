const fs = require('fs');
const inputData = fs
  .readFileSync('../../input.txt')
  .toString()
  .trim()
  .split('\n');

const input1 = inputData[1].split(' ').map(Number);
const input2 = inputData[3].split(' ').map(Number);

const answer = [];

const count = {};

for (let i = 0; i < input1.length; i++) {
  if (count[input1[i]] === undefined) count[input1[i]] = 0;
  ++count[input1[i]];
}

for (let i = 0; i < input2.length; i++) {
  if (count[input2[i]] === undefined) answer.push(0);
  else answer.push(count[input2[i]]);
}

console.log(answer.join(' '));
