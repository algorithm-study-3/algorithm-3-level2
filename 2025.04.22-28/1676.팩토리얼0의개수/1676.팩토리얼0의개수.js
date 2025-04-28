const fs = require('fs');
const inputData = Number(fs.readFileSync('./dev/stdin').toString().trim());

let five_count = 0;
for (let i = 1; i <= inputData; i++) {
  let facto = i;
  while (facto % 5 === 0) {
    if (facto % 5 === 0) {
      five_count++;
      facto /= 5;
    }
  }
}

console.log(five_count);

// BigInt 풀이
// const fs = require('fs');
// const inputData = Number(fs.readFileSync('./dev/stdin').toString().trim());

// let facto = 1n;
// for (let i = 1n; i <= BigInt(inputData); i++) {
//   facto *= i;
// }
// facto = facto.toString();

// let count = 0;
// for (let i = facto.length - 1; i >= 0; i--) {
//   if (Number(facto[i]) === 0) {
//     ++count;
//   } else {
//     break;
//   }
// }

// console.log(count);
