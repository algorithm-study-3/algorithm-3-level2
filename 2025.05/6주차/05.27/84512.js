//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `AAAE`;
const N = readLine.split('\n');
const alphabet = ['A', 'E', 'I', 'O', 'U'];
const answer = Array.from({ length: 5 }, () => '');
let i = 0;
let idx = 0;

function solution(i) {
  idx++;
  if (i > 4) return;
  for (let j = 0; j < 5; j++) {
    answer[i] = alphabet[j];
    if (answer.slice(0, i + 1).join('') === N[0]) console.log(idx);
    solution(i + 1);
  }
}

solution(i);
