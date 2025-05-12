// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `5
4 1 5 2 3
5
1 3 7 9 5`;

const input = readline.split('\n');
const n = Number(input[0]);
const arrA = input[1].split(' ').map(Number);
const m = Number(input[2]);
const numbers = input[3].split(' ').map(Number);

const numbersObj = {};
for (let i = 0; i < m; i++) {
  numbersObj[numbers[i]] = 0;
}

for (let i = 0; i < n; i++) {
  if (numbersObj[arrA[i]] !== undefined) {
    numbersObj[arrA[i]] = 1;
  }
}

const answer = [];
for (let i = 0; i < m; i++) {
  answer.push(numbersObj[numbers[i]]);
}

console.log(answer.join('\n'));
