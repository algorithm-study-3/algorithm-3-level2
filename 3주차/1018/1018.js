const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 풀이
function solution(arr) {
  const [row, col] = arr[0].split(" ").map(Number);

  const chess = arr.slice(1).map((ch) => ch.split(""));

  const firstWhitePaint = (i, j) => {
    let firstWhite = 0;
    for (let w = i; w < i + 8; w++) {
      for (let h = j; h < j + 8; h++) {
        if (w % 2 === 0) {
          if (h % 2 == 0) {
            if (chess[w][h] !== "W") firstWhite += 1;
          } else {
            if (chess[w][h] !== "B") firstWhite += 1;
          }
        } else {
          if (h % 2 == 0) {
            if (chess[w][h] !== "B") firstWhite += 1;
          } else {
            if (chess[w][h] !== "W") firstWhite += 1;
          }
        }
      }
    }
    return firstWhite;
  };

  const firstBlackPaint = (i, j) => {
    let firstBlack = 0;
    for (let w = i; w < i + 8; w++) {
      for (let h = j; h < j + 8; h++) {
        if (w % 2 === 0) {
          if (h % 2 == 0) {
            if (chess[w][h] !== "B") firstBlack += 1;
          } else {
            if (chess[w][h] !== "W") firstBlack += 1;
          }
        } else {
          if (h % 2 == 0) {
            if (chess[w][h] !== "W") firstBlack += 1;
          } else {
            if (chess[w][h] !== "B") firstBlack += 1;
          }
        }
      }
    }
    return firstBlack;
  };

  let minPaint = Infinity;

  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      const white = firstWhitePaint(i, j);
      const black = firstBlackPaint(i, j);
      minPaint = Math.min(minPaint, white, black);
    }
  }

  console.log(minPaint);
}

solution(input);
