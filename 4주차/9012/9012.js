// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;

const [N, ...input] = readLine.split("\n");

const answer = [];

for (let i = 0; i < input.length; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    let ps = input[i][j];
    if (ps === "(") {
      stack.push(ps);
    } else if (stack.length !== 0 && ps === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        break;
      }
    } else {
      stack.push(ps);
    }
  }

  if (stack.length !== 0) {
    answer.push("NO");
  } else {
    answer.push("YES");
  }
}

console.log(answer.join("\n"));
