const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = Array.from(Array(N), () => Array());
const visited = Array(N).fill(false);
let count = 0;

for(let i=1; i<M+1; i++) {
  const [u,v] = input[i].split(' ').map((v=>+v-1));
  A[u].push(v);
  A[v].push(u)
}

for(let i=0; i<N; i++) {
  if(!visited[i]) {
    count++;
    DFS(i)
  }
}

function DFS(i) {
  if(visited[i]) return;
  visited[i] = true;
  for(let j=0; j<A[i].length; j++) {
    let check = A[i][j];
    if(!visited[check]) DFS(check)
  }
}
console.log(count);

