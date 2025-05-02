// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
/**
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 */
const readLine = `15
push 1
push 2
front
back
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
front`;
const [N, ...input] = readLine.split('\n');
const queue = [];
const answer = [];
for (const x of input) {
  const [command, number] = x.split(' ');
  if (command === 'push') {
    queue.push(number);
  } else if (command === 'pop') {
    if (queue.length === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.shift());
    }
  } else if (command === 'size') {
    answer.push(queue.length);
  } else if (command === 'empty') {
    answer.push(queue.length === 0 ? 1 : 0);
  } else if (command === 'front') {
    answer.push(queue.length === 0 ? -1 : queue[0]);
  } else if (command === 'back') {
    answer.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
  }
}
console.log(answer.join('\n'));
