const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const result = [];
let temp = [];
let falg = true;
for (let i = 0; i < inputData.length - 1; i++) {
  temp = [];
  flag = true;
  for (let j = 0; j < inputData[i].length; j++) {
    if (inputData[i][j] === '(' || inputData[i][j] === '[') {
      temp.push(inputData[i][j]);
    } else if (inputData[i][j] === ')' || inputData[i][j] === ']') {
      if (temp.length === 0) {
        result.push('no');
        flag = false;
        break;
      } else {
        let str = temp.pop();
        if (
          (inputData[i][j] === ')' && str !== '(') ||
          (inputData[i][j] === ']' && str !== '[')
        ) {
          result.push('no');
          flag = false;
          break;
        }
      }
    }
  }
  if (temp.length === 0 && flag) {
    result.push('yes');
  } else if (temp.length !== 0 && flag) {
    result.push('no');
  }
}

console.log(result.join('\n'));
