// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
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

const [N, ...input] = readLine.split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].includes("push")) {
    const [_, x] = input[i].split(" ");
    result.push(x);
  } else if (input[i].includes("pop")) {
    if (result.length === 0) {
      console.log(-1);
    } else {
      console.log(result[result.length - 1]);
      result.pop();
    }
  } else if (input[i].includes("size")) {
    console.log(result.length);
  } else if (input[i].includes("empty")) {
    if (result.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (input[i].includes("top")) {
    if (result.length === 0) {
      console.log(-1);
    } else {
      console.log(result[result.length - 1]);
    }
  }
}
// console.log(result.reduce((acc, item) => (acc += item), 0));
