// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `10
1
3
5
4
0
0
7
0
0
6`;

const [N, ...input] = readLine.split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] == 0) {
    result.pop();
  } else {
    result.push(Number(input[i]));
  }
}
console.log(result.reduce((acc, item) => (acc += item), 0));
