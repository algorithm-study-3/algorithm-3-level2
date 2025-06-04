// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `2
6
12`;

const input = readline.split('\n');
const n = Number(input.shift());

// 13: 24

for (let i = 0; i < n; i++) {
  const num = Number(input[i]);

  const dp = Array(num + 1).fill(1);
  for (let j = 3; j <= num; j++) {
    dp[j] = dp[j - 2] + dp[j - 3];
  }
  console.log(dp[num - 1]);
}
