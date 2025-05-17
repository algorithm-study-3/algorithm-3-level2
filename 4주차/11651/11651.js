// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `5
0 4
1 2
1 -1
2 2
3 3`;

const [N, ...input] = readLine.split("\n");

const array = input.map((item) => item.split(" ").map((item) => Number(item)));

const result = array.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

result.forEach((item) => {
  console.log(item[0], item[1]);
});
