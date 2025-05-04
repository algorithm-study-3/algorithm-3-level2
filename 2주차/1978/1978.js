const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  const values = arr.slice(1)[0].split(" ");

  // 소수 특징
  const prime = values.filter((value) => {
    if (value < 2) return false;
    for (let i = 2; i < value; i++) {
      if (value % i === 0) return false;
    }
    return true;
  });

  console.log(prime.length);
}

solution(input);
