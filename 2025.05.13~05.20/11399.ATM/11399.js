// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `5
3 1 4 3 2`;

const input = readline.split('\n');
const n = Number(input.shift());
const arr = input[0].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let sum = 0;

arr.forEach((num) => {
  sum += num;
  answer += sum;
});

console.log(answer);
