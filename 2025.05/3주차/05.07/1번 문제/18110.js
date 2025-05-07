// const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `6
1
1
1
2
3
4`;
const [N, ...input] = readLine.split('\n');

if (N === '0') {
  console.log(0);
} else {
  const sortedLevels = input.map((x) => Number(x)).sort((a, b) => a - b);
  const minusIndex = Math.round((N / 100) * 15);
  const filteredLevels = sortedLevels.slice(minusIndex, N - minusIndex);

  const average = filteredLevels.reduce((acc, cur) => acc + cur, 0) / filteredLevels.length;
  console.log(average, Math.round(average));
}
