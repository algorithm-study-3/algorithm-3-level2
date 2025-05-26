// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `3 16`;

/** 소수구하기
 * n과 m이 주어졌을 때, n이상 m이하 사이에 해당하는 소수를 구하라.
 * 소수의 특징 1과 자기 자신이 아닌 이상 나눠지지 않는 숫자
 * 2부터 자기 자신까지 반복문을 돌면서 나눠지는 경우에 break;
 * 통과가 된 경우, 결과값 배열에 넣는다.
 */

/** 에라토네스의 체 방식의 소수 구하기
 * 에라토네스의 체 규칙
 * - 소수를 구하고자하는 값이 M이라고 가정했을 때,
 * 2~M 까지 반복문을 돌면서 2의 배수들, 3의 배수들, 4의 배수들, 5의 배수 .,,, sqrt(M)의 배수들까지 다 제외를 하면된다.
 * 핵심) 4의 배수를 진행할때는 이미 2의 배수에서 제외되었기 때문에 이를 제외한다. (즉, if문으로 넘어가는 걸 체크해야함.)
 *
 * 문제 풀이
 * 1. 구하고자하는 M까지 배열(prime)을 하나 만든다.
 * 2. 나머지에 다 true를 넣어놓는다. (우선 다 소수라고 판단, 0과 1은 소수가 아니기에 false) (초기세팅)
 * 3. 2~sqrt(M)까지 반복문을 돈다.
 * 4. if(prime(2)) 안에 true인 경우, 통과 시킨다. -> 이게 소수임
 * 5. if 문 내부에서 들어온 숫자 + 숫자 (숫자의 배수)만큼 반복문을 돈다. (증감은 해당 숫자만큼)
 * 6. 돌면서 나오는 녀석들은 모두 prime 배열에서 false 처리한다.
 * 7. N~M 까지 다시 반복문을 돌면서 prime 배열이 true인 녀석들만 출력한다.
 */
const [N, M] = readLine.split(" ").map(Number);

const isPrime = Array(M + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(M); i++) {
  if (isPrime[i]) {
    for (let j = i + i; j <= M; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];
for (let i = N; i <= M; i++) {
  if (isPrime[i]) result.push(i);
}

console.log(result.join("\n"));
