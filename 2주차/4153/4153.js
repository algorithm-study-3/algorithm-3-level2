const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  arr.pop();
  const values = arr.map((value) => value.split(" "));

  const answer = values.map((value) => {
    value.sort((a, b) => a - b);

    if (value[2] * value[2] === value[0] * value[0] + value[1] * value[1]) {
      return "right";
    }
    return "wrong";
  });
  console.log(answer.join("\n"));
}

solution(input);
