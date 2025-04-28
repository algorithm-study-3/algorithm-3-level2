const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 풀이
function solution(arr) {
  const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let text = arr[0];

  croatia.forEach((value) => {
    text = text.replaceAll(value, "X");
  });

  console.log(text.length);
}

solution(input);
