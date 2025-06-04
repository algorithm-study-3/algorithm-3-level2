// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`;

const input = readline.split('\n');
const n = Number(input.shift());

let x = 0;
while (x !== input.length) {
  const [n, m] = input[x].split(' ').map(Number);

  if (!m) {
    const [c, ...arr] = input.slice(x, x + n + 1);
    const obj = {};

    for (let j = 0; j < arr.length; j++) {
      const [name, type] = arr[j].split(' ');

      obj[type] = (obj[type] || 0) + 1;
    }
    const values = Object.values(obj);

    const sum = Object.values(obj).reduce((a, b) => a * (b + 1), 1);
    console.log(sum - 1);

    x += n + 1;
  }
}
