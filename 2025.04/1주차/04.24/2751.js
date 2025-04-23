// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `5
5
4
3
2
1`;
const [N, ...input] = readLine.split('\n');

const answer = input.sort((a, b) => Number(a) - Number(b));

console.log(answer.join('\n'));
