const fs = require('fs');
let inputData = Number(fs.readFileSync('./dev/stdin').toString().trim());

let answer = 0;
while (inputData % 5 !== 0) {
  inputData -= 3;
  ++answer;
}
if (inputData >= 5) {
  answer += Math.floor(inputData / 5);
  inputData %= 5;
}

if (inputData !== 0) console.log(-1);
else console.log(answer);
