const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  const member = arr[0];
  const clothes = arr[1].split(" ");
  const [clothesT, penT] = arr[2].split(" ");

  const clothesSum = clothes.reduce((acc, c) => {
    if (c % clothesT === 0) {
      acc += Math.floor(c / clothesT);
    } else {
      acc += Math.floor(c / clothesT) + 1;
    }
    return acc;
  }, 0);

  const penSum = Math.floor(member / penT);
  const penRest = member % penT;

  console.log(clothesSum);
  console.log(penSum, penRest);
}

solution(input);
