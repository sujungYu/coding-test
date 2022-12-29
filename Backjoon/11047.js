const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(v => +v);
const A = input.slice(1).map(v => +v);
let count = 0;

for(let i = N-1; i >= 0; i--) {
  if(A[i] <= K) {
    count += Math.floor(K / A[i]);
    K = K % A[i];
  }
  if (K === 0) break;
}
console.log(count);