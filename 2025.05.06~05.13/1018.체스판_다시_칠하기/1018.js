// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `11 12
BWWBWWBWWBWW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBWWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW`;
// 23:06 ~ 24.03

const [nm, ...input] = readline.split('\n');
const [n, m] = nm.split(' ').map(Number); // 세로 가로

const arr = input.map((x) => x.split(''));

let count = [];

for (let i = 0; i < n - 8 + 1; i++) {
  for (let j = 0; j < m - 8 + 1; j++) {
    const countArr = paint(i, j);
    count = [...count, countArr];
  }
}

console.log(Math.min(...[].concat(...count)));

function paint(x, y) {
  let countArr = [];
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  //맨 왼쪽 위칸이 흰색인 경우
  let whiteCount = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      // 짝수번째줄 짝수는 W 홀수는 B
      if (i % 2 === 0) {
        if (j % 2 === 0 && arr[i][j] !== 'W') {
          whiteCount += 1;
        }

        if (j % 2 !== 0 && arr[i][j] !== 'B') {
          whiteCount += 1;
        }
      }
      // 홀수번째줄 짝수는 B 홀수는 W
      if (i % 2 !== 0) {
        if (j % 2 === 0 && arr[i][j] !== 'B') {
          whiteCount += 1;
        }

        if (j % 2 !== 0 && arr[i][j] !== 'W') {
          whiteCount += 1;
        }
      }
    }
  }

  countArr.push(whiteCount);
  //맨 왼쪽 위칸이 검은색인 경우
  let blackCount = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      // 홀수번째줄 짝수는 W 홀수는 B
      if (i % 2 !== 0) {
        if (j % 2 === 0 && arr[i][j] !== 'W') {
          blackCount += 1;
        }

        if (j % 2 !== 0 && arr[i][j] !== 'B') {
          blackCount += 1;
        }
      }
      // 짝수번째줄 짝수는 B 홀수는 W
      if (i % 2 === 0) {
        if (j % 2 === 0 && arr[i][j] !== 'B') {
          blackCount += 1;
        }

        if (j % 2 !== 0 && arr[i][j] !== 'W') {
          blackCount += 1;
        }
      }
    }
  }
  countArr.push(blackCount);

  return countArr;
}
