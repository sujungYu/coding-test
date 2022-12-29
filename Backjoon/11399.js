const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const N = +input[0];
const A = input[1].split(' ').map(Number);
const S = new Array();

for(let i=1; i<N; i++) {
  let insertIndex = i;
  let insertValue = A[i];
  for(let j=0; j<=i; j++) {
    if(A[i] < A[j]) {
      insertIndex= j;
      break;
    }
  }
  for(let j=i; j>=insertIndex; j--) {
    A[j] = A[j-1]
  }
  A[insertIndex] = insertValue;
}

S[0] = A[0]
for(let i=1; i<N; i++) {
  S[i] = S[i-1] + A[i];
}

let sum = 0;
for(let i=0; i<N; i++) {
  sum += S[i]
}
console.log(sum);
