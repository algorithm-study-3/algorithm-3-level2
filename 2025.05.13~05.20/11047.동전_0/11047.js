// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;

const input = readline.split('\n');
const [n, k] = input.shift().split(' ').map(Number);

const arr = input.map(Number).sort((a, b) => b - a);

let money = k;

let i = 0;
let count = 0;

while (money !== 0) {
  if (money / arr[i] < 1) {
  } else {
    const value = Math.floor(money / arr[i]);
    count += value;

    money = money - arr[i] * value;
  }
  i += 1;
}
console.log(count);
