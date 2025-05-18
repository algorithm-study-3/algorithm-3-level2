const fs = require('fs');
const [N, ...arr] = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n');

let result = 0;
for (let i = 0; i < Number(N); i++) {
  let flag = true;
  const alphabets = [];
  let idx = 0;
  const str = arr[i];
  for (let j = 0; j < str.length; j++) {
    if (alphabets.length === 0) {
      alphabets.push(str[0]);
    } else if (str[j] !== alphabets[idx] && alphabets.includes(str[j])) {
      flag = false;
      break;
    } else if (str[j] === alphabets[idx]) {
      continue;
    } else {
      alphabets.push(str[j]);
      ++idx;
    }
  }
  if (flag) ++result;
}

console.log(result);
