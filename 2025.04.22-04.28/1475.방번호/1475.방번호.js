const fs = require('fs');
const inputData = fs
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('')
  .map(Number);

const countArr = Array(10).fill(0);
for (let i = 0; i < inputData.length; i++) {
  countArr[inputData[i]]++;
}

const sixAndNine = Math.ceil((countArr[6] + countArr[9]) / 2);
countArr[6] = sixAndNine;
countArr[9] = 0;
const answer = Math.max(...countArr);

console.log(answer);
