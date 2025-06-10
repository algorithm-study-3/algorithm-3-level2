// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `11101101`;
// 15: 11 ~ 15:20
const input = readline;

console.log(input);

let obj = {
  0: 0,
  1: 0,
};

for (let i = 1; i < input.length; i++) {
  if (input[i - 1] !== input[i]) {
    console.log(i);
    obj[input[i - 1]] += 1;
  }

  if (i === input.length - 1) {
    obj[input[i]] += 1;
  }
}
console.log(Math.min(...Object.values(obj)));
console.log(obj);
