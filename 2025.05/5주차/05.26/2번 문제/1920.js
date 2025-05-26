//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `5
4 1 5 2 3
5
1 3 7 9 5`;
const [N, A, M, K] = readLine.split('\n');

const map = new Map();

A.split(' ').forEach((v, i) => {
  if (!map.has(v)) {
    map.set(v, i + 1);
  }
});

const answer = K.split(' ').map((v) => (map.get(v) ? 1 : 0));
console.log(answer.join('\n'));
