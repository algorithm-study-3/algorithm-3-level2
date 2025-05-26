const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

let [N, K] = inputData[0].split(' ').map(Number);
const coins = [];
for (let i = 1; i <= N; i++) {
  coins.push(Number(inputData[i]));
}

let answer = 0;
for (let i = N - 1; i >= 0; i--) {
  while (coins[i] <= K) {
    K -= coins[i];
    answer++;
  }
}

console.log(answer);
