const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 풀이
function solution(arr) {
  const newArray = arr.map((values) =>
    values.split(" ").map((value) => Number(value))
  );

  let row = 0;
  let col = 0;
  let maxValue = -1;
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      if (maxValue < newArray[i][j]) {
        maxValue = newArray[i][j];
        row = i + 1;
        col = j + 1;
      }
    }
  }

  console.log(maxValue);
  console.log(row, col);
}

solution(input);
