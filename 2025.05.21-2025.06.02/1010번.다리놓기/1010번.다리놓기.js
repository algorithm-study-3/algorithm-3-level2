const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const T = Number(inputData[0]);
for (let i = 1; i <= T; i++) {
  const [N, M] = inputData[i].split(' ').map(Number);
  let parent = 1;
  let child = 1;
  for (let j = 0; j < N; j++) {
    child *= M - j;
    parent *= j + 1;
  }
  console.log(Math.round(child / parent));
}
