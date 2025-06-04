// const readline = require('fs').readFileSync('dev/stdin').toString().trim();
const readline = `1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`;

const input = readline.split('\n');
const n = Number(input.shift());

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let position = [];
let arr = input[0].split(' ');
let x = 0;
while (x !== input.length) {
  const [m, n, k] = input[x].split(' ').map(Number);

  if (k) {
    start(
      [m, n, k],
      input.slice(x + 1, x + k + 1).map((x) => x.split(' ').map(Number))
    );
  }
  x += 1;
}

function start(arr, position) {
  const [m, n, k] = arr;
  let answer = 0;

  const graph = Array.from(Array(m), () => Array(n).fill(0));
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  position.forEach(([a, b]) => {
    graph[a][b] = 1;
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        dfs(i, j, m, n, visited, graph);
        answer += 1;
      }
    }
  }
  console.log(answer);
}

function dfs(i, j, m, n, visited, graph) {
  if (!visited[i][j]) {
    visited[i][j] = true;

    dir.forEach(([a, b]) => {
      const [nx, ny] = [a + i, b + j];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < m &&
        ny < n &&
        !visited[nx][ny] &&
        graph[nx][ny] === 1
      ) {
        dfs(nx, ny, m, n, visited, graph);
      }
    });
  }
}
