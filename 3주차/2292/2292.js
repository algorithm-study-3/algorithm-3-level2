const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  let N = arr[0];

  let acc = 1;
  let n = 1;
  while (acc < N) {
    acc = 6 * n + acc;
    n++;
  }
  console.log(n);
}

solution(input);
