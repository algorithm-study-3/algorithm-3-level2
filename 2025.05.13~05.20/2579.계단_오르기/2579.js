// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `6
10
20
15
25
10
20`;

const input = readline.split('\n');
const n = Number(input.shift());
const arr = input.map(Number);

const dp = Array(n + 1)
  .fill()
  .map((_) => [0, 0]);

dp[0] = [arr[0], 0];
dp[1] = [arr[1], arr[0] + arr[1]];
// [i][연속횟수]
// 이전꺼 안밟, 전꺼 밟

for (let i = 3; i < n; i++) {
  dp[i][0] = Math.max(dp[i - 2][0], dp[i - 2][1]) + arr[i];
  dp[i][1] = dp[i - 1][0] + arr[i];
  console.log(i, dp[i]);
}
console.log(Math.max(dp[n - 1][0], dp[n - 1][1]));
