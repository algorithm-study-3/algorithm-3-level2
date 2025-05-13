// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;

const input = readline.split('\n');
const n = Number(input.shift());
// const arr = input[1].split('');

console.log(input, n);
const answer = [];
for (let x = 0; x < n; x++) {
  const stack = [];
  const str = input[x];
  console.log(str);
  stack.push(str[0]);
  for (let i = 1; i < str.length; i++) {
    stack.push(str[i]);

    if (stack[stack.length - 1] === ')') {
      if (stack[stack.length - 2] === '(') {
        stack.pop();
        stack.pop();
      }
    }
  }

  console.log(x, stack);
  if (stack.length === 0) {
    answer.push('YES');
  } else {
    answer.push('NO');
  }
}
console.log(answer.join('\n'));
