const fs = require('fs');
const inputData = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const arr1 = inputData[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const arr2 = inputData[3].split(' ').map(Number);

function binarySearch(target, arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return 0;
}

for (let i = 0; i < arr2.length; i++) {
  if (binarySearch(arr2[i], arr1)) console.log(1);
  else console.log(0);
}
