// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;

const answer = [];
const input = readline.split('\n');
const t = Number(input.shift());

for (let i = 0; i < t * 2; i += 2) {
  const [n, m] = input[i].split(' ').map(Number); // 문서 개수, 궁금 문서 index
  const arr = input[i + 1].split(' ').map(Number); //
  const index = Array.from({ length: arr.length }, (v, i) => i);

  let x = 0;
  let count = 0;
  while (arr.length !== 0) {
    const shifted = arr.shift();
    const shiftedIndex = index.shift();

    if (arr.some((e) => e > shifted)) {
      arr.push(shifted);
      index.push(shiftedIndex);
      continue;
    }
    count += 1;

    if (shiftedIndex === m) {
      answer.push(count);
      break;
    }

    x += 1;
  }
}

console.log(answer.join('\n'));

// const [n, k] = input.shift().split(' ').map(Number);

// 15: 08 ~ 16:10

// 1. 현재 Queue의 가장 앞에 있는 문서의 ‘중요도’를 확인한다.
// 2. 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면,
//    이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치 한다. 그렇지 않다면 바로 인쇄를 한다.
