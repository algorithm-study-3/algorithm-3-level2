// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
/**
push X: 정수 X를 스택에 넣는 연산이다.
pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 스택에 들어있는 정수의 개수를 출력한다.
empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */
const readLine = `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`;
const [N, ...input] = readLine.split('\n');
const stack = [];
const answer = [];
for (const x of input) {
  const [command, num] = x.split(' ');

  if (command === 'push') {
    stack.push(num);
  } else if (command === 'pop') {
    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack.pop());
    }
  } else if (command === 'size') {
    answer.push(stack.length);
  } else if (command === 'empty') {
    answer.push(stack.length === 0 ? 1 : 0);
  } else if (command === 'top') {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}
console.log(answer.join('\n'));
