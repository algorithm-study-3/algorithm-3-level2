const fs = require('fs');
const [N, ...arr] = fs
  .readFileSync('../../input.txt')
  .toString()
  .trim()
  .split('\n');

// 입력값 숫자로 변환
let newArr = arr
  .map((number) => number.split(' '))
  .map((number) => [Number(number[0]), Number(number[1])]);

// x축 y축 정렬
newArr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

// 정렬 결과 출력
for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i][0], newArr[i][1]);
}

/**
 * 1차 풀이 -> 정답
 * 1. x축 기준으로 오름차순 정렬
 * 2. y축 기준으로 오름차순 정렬
 * 3. 정렬 결과 출력
 */
