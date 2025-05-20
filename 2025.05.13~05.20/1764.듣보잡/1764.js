// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`;

const input = readline.split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const arr1 = input.slice(0, n); //듣지못한
const arr2 = input.slice(n); //보지못한

const obj = {};
for (let i = 0; i < arr1.length; i++) {
  obj[arr1[i]] = 0;
}

for (let i = 0; i < arr2.length; i++) {
  if (obj[arr2[i]] === 0) {
    obj[arr2[i]] = 1;
  }
}
const answer = [];
for (const [key, value] of Object.entries(obj)) {
  if (value > 0) answer.push(key);
}

console.log(answer.length);
console.log(answer.sort().join('\n'));
