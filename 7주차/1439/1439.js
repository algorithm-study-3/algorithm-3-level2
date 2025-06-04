// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `11111`;

const N = readLine.split("");

const obj = { 0: 0, 1: 0 };

for (let i = 0; i < N.length; i++) {
  if (N[i] !== N[i + 1]) {
    obj[N[i]] = obj[N[i]] + 1;
  }
}
console.log(Math.min(...Object.values(obj)));
