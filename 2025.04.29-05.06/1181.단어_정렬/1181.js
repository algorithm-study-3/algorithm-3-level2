// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;
// 12:52 1:13
const input = readline.split('\n');
const [n, ...arr] = input;

const set = new Set(arr);
const uniq = [...set];
const sorted = uniq.sort();
const answerArr = sorted.sort((a, b) => a.length - b.length);
console.log(answerArr.join('\n'));
