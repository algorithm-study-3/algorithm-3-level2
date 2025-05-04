// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `5
5
4
3
2
1`;
// 1:18 ~ 1:30

const input = readline.split('\n');
const [n, ...arr] = input;

arr.sort((a, b) => a - b);
console.log(arr.join('\n'));
