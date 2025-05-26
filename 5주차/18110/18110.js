// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `0
1
5
5
7
8`;

/** 절사평균 구하기
 * 위 아래 15% 씩
 * ex) 총 5명인 경우, -> 15프로  === 5*0.15 = 0.75 반올림 -> 1
 * 즉, 맨 아래 1명과 맨 위에 1명을 제외하고 나머지 애들로 평균값을 때린다.
 *
 * 1. 전체에서 위/아래 제외할 명단의 수를 구한다. (15%의 반올림)
 * 2. 전체 배열을 정렬한다.
 * 3. 반복문을 도는데, 시작은 + 제외명단수 / 끝 - 제외명단수
 * 4. 값을 다 더하고, 더한 값 / 전체-제외한 명단수*2 -> 반올림
 */

const [N, ...input] = readLine.split("\n");
if (N === "0") return console.log(0);

input.sort((a, b) => a - b);

except = Math.round(N * 0.15);

let sum = 0;
for (let i = 0 + except; i < input.length - except; i++) {
  sum += Number(input[i]);
}

const avg = Math.round(sum / (N - except * 2));
console.log(avg);
