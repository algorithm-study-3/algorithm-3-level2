const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 풀이
function solution(arr) {
  arr.splice(0, 1);
  let num = 0;

  let stack = [];

  arr.forEach((value) => {
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== value[i + 1]) stack.push(value[i]);
    }
    if (new Set(stack).size === stack.length) num++;
    stack = [];
  });
  console.log(num);
}

solution(input);
