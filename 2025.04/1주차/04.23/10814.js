// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;
const [N, ...input] = readLine.split('\n');

const answer = input.sort((a, b) => {
  const [aAge, aName] = a.split(' ');
  const [bAge, bName] = b.split(' ');
  return parseInt(aAge, 10) - parseInt(bAge, 10);
});

console.log(answer.join('\n'));
