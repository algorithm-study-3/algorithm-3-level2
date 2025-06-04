//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `000000`;
const N = readLine;

const map = new Map();
let before = N[0];
map.set(before, 1);

for (const x of N.split('')) {
  if (before !== x) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }

  before = x;
}

console.log(map.size > 0 ? Math.min(...map.values()) : 0);
