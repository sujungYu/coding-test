const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = Array.from(Array(N), () => Array());
const visited = Array(N).fill(false);
let count = 0;

for(let i=1; i<M+1; i++) {
  const [u,v] = input[i].split(' ').map((v=>+v));
  A[u].push(v);
  A[v].push(u)
}
console.log(A);
for(let i=0; i<N; i++) {
  console.log(visited);
  if(count >= 5) return console.log(1);

  if(!visited[i]) {
    count = 0;
    DFS(i);
  }
  else return console.log(0);
}

function DFS(i) {
  if(visited[i]) return;
  count++;
  visited[i] = true;
  for(let j=0; j<A[i].length; j++) {
    let next = A[i][j];
    if(!visited[next]) {
      DFS(next);
      console.log(next);
    }

  }
}

