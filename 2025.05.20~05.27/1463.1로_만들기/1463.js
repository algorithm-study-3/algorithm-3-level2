// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `10`;

const input = readline.split('\n');
const n = Number(input[0]);

// 21: 34 ~ 21: 47

const dp = Array(n + 1).fill(0);

dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp[n]);
