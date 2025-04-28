const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 풀이
function solution(arr) {
  const obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, "6+9": 0, 7: 0, 8: 0 };
  const text = arr[0];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "6" || text[i] === "9") {
      obj["6+9"]++;
    } else {
      obj[text[i]]++;
    }
  }
  if (obj["6+9"] % 2 === 1) {
    obj["6+9"] = Math.floor(obj["6+9"] / 2) + 1;
  } else {
    obj["6+9"] = obj["6+9"] / 2;
  }
  console.log(Math.max(...Object.values(obj)));
}

solution(input);
