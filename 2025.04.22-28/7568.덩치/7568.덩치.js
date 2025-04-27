const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const arr = [];
for (let i = 1; i < inputData.length; i++) {
  arr.push(inputData[i].split(' ').map(Number));
}

const answer = [];
for (let i = 0; i < arr.length; i++) {
  let rank = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i === j) continue;
    if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) ++rank;
  }
  answer.push(rank);
}

console.log(answer.join(' '));
