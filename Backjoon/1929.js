const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(v => +v);
const A = Array(M).fill().map((v,i) => i+1);
let result = new Array()

for(let i=2; i<M; i++) {
  if(A[i-1] === 0) {
    continue;
  }
  for(let j=i+i; j<=M; j=j+i) {
    A[j-1] = 0
  }
}

for(let i=0; i<M; i++) {
  if(A[i] >= N && A[i] <= M) {
    result.push(A[i])
  }
}

console.log(result.join('\n'));