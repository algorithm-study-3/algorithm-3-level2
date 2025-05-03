// const input = require('fs').readFileSync('dev/stdin').toString().trim();
const input = `12966`;

const numbers = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  69: 0,
  7: 0,
  8: 0,
};

const len = input.length;
for (let i = 0; i < len; i++) {
  const number = Number(input[i]);

  if (number === 6 || number === 9) {
    numbers[69] += 1;
  } else {
    numbers[number] += 1;
  }
}

const max = Math.max(...Object.values(numbers));
const maxNumber = Object.keys(numbers).find((key) => numbers[key] === max);

if (maxNumber === '69') {
  console.log(Math.ceil(max / 2));
} else {
  console.log(max);
}
