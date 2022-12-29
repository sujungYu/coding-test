const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const N = +input[0];
const A = input.slice(1).map(Number);

for(let i=0; i<N; i++) {
  for(let j=0; j<N; j++) {
    if(A[j] > A[j+1]) {
      let temp = A[j];
      A[j] = A[j+1];
      A[j+1] = temp;
    }
  }
}
const result = A.map((i) => String(i) + '\n').join('')
console.log(result);