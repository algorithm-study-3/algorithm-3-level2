const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  const [N, M] = arr[0].split(" ").map(Number);
  const clean = arr.slice(1);

  const obj = {};
  for (let i = 0; i < N; i++) {
    obj[clean[i]] = 1;
  }
  for (let i = N; i < N + M; i++) {
    if (obj[clean[i]] === 1) obj[clean[i]] = 2;
  }

  const newArr = Object.entries(obj)
    .filter(([_, value]) => value === 2)
    .map(([key, _]) => key)
    .sort();

  console.log(newArr.length);
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
}

solution(input);
