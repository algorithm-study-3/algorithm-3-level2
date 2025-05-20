// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;

/**
 * 1번째 줄 ) 첫번째 값이 문서의 갯수
 * 1번째 줄 ) 2번째 값이 내가 출력하고자하는 문서의 위치
 * 2번째 줄 ) 문서의 중요도
 *
 * 큐를 구현한다.
 * 순서대로 중요도를 넣는다. -> [중요도 , 출력 위치] 를 바탕으로 큐를 만든다.
 * 처음 삭제하기 전 큐를 전부 체크해서 max값을 체크한다.
 * max 값이 나오기전까지 나오는 우선순위를 뒤로 미룬다.
 * max가 나오면 해당 값을 제거한다.
 * 그리고 다시 남은 배열에서 max 값을 체크한다.
 *
 *
 */

const [N, ...input] = readLine.split("\n");
const indexLocation = input
  .filter((_, index) => index % 2 === 0)
  .map((item) => item.split(" ")[1]);

const important = input
  .filter((_, index) => index % 2 !== 0)
  .map((item) => item.split(" "));

const result = [];

important.forEach((im, index) => {
  const realIndex = indexLocation[index];

  const im1 = Array.from({ length: im.length }).fill(0);
  im1[realIndex] = 1;

  let i = 1;
  while (im.length !== 0) {
    const maxValue = Math.max(...im);
    if (Number(im[0]) === maxValue) {
      if (im1[0] === 1) {
        result.push(i);
      }
      im.shift();
      im1.shift();
      i += 1;
    } else {
      im.push(im[0]);
      im.shift();
      im1.push(im1[0]);
      im1.shift();
    }
  }
});

console.log(result.join("\n"));
