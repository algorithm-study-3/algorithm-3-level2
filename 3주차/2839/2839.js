const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  let kg = arr[0];
  let n = 0;
  let flag = false;

  while (kg > 0) {
    if (kg >= 3 && kg % 5 !== 0) {
      kg -= 3;
      n++;
    } else if (kg % 5 === 0) {
      kg -= 5;
      n++;
    } else {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log(-1);
  } else {
    console.log(n);
  }
}

solution(input);
