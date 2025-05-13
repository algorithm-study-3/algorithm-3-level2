const fs = require('fs');
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
input.pop();

let flag = true;

const result = [];
for (let j = 0; j < input.length; j++) {
  flag = true;
  let data = input[j];
  for (let i = data.length; data.length > 1; i--) {
    if (data[0] === data[data.length - 1]) {
      data = data.slice(1, data.length - 1);
    } else {
      flag = false;
      result.push('no');
      break;
    }
  }
  if (flag) {
    result.push('yes');
  }
}

console.log(result.join('\n'));
